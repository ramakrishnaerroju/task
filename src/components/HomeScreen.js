import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ChildView = ({ data, parentId }) => {
  return data
    .filter((childItem) => {
      return parentId === childItem.parent_objective_id;
    })
    .map((item, index) => {
      return (
        <li key={index}>
          <div style={{ display: "flex" }}>{item.title}</div>
        </li>
      );
    });
};

const HomeScreen = ({ OkrData }) => {
  const [showChild, setShowChild] = useState(false);
  const [accordionId, setAccordionId] = useState(0);
  return (
    <div>
      <ol>
        {OkrData &&
          OkrData.map((item, index) => {
            if (item.parent_objective_id == "")
              return (
                <div style={{ display: "flex" }}>
                  <p style={{ width: "10%" }}>
                    {showChild && (
                      <FontAwesomeIcon icon={faCaretDown} size="xs" />
                    )}
                  </p>
                  <li
                    style={{ width: "90%" }}
                    key={index}
                    onClick={() => {
                      setShowChild(!showChild);
                      setAccordionId(index);
                    }}
                  >
                    <p style={{ display: "flex" }}>{item.title}</p>
                    {showChild && accordionId == index && (
                      <ol type="a">
                        {OkrData && (
                          <ChildView data={OkrData} parentId={item.id} />
                        )}
                      </ol>
                    )}
                  </li>
                </div>
              );
          })}
      </ol>
    </div>
  );
};

export default HomeScreen;
