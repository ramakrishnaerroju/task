import React, { useEffect } from "react";
import HomeScreenView from "./HomeScreen";
import useOkrData from "../hooks/useOkrData";

const HomeScreenWrapper = () => {
  const { OkrData, loading, error } = useOkrData();

  if (loading) <h1>Loading...</h1>;
  if (error) <h2>Some error</h2>;
  console.log(OkrData);
  return <HomeScreenView OkrData={OkrData}></HomeScreenView>;
};

export default HomeScreenWrapper;
