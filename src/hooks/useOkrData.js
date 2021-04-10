import { useReducer, useEffect } from "react";
import axios from "axios";
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL = "https://okrcentral.github.io/sample-okrs/db.json";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, OkrData: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        OkrData: action.payload.OkrData.data,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        OkrData: [],
      };
    default:
      return state;
  }
}

export default function useOkrData() {
  const [state, dispatch] = useReducer(reducer, {
    OkrData: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { OkrData: res.data },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return state;
}
