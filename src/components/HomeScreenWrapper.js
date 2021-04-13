import React, { useState } from "react";
import HomeScreenView from "./HomeScreen";

const HomeScreenWrapper = () => {
  const [data] = useState([
    {
      name: "Saint Mary Street Pump Station: CNTRF105M847638",
      modelNumber: "CNTRF10",
      serialNumber: "CNTRF10B7836748CC",
      description: "Pump for station 834739",
      location: "Needham, MA",
    },
    {
      name: "Saint Mary Street Pump Station: CNTRF105M847638",
      modelNumber: "CNTRF11",
      serialNumber: "CNTRF10B7836748CC",
      description: "Pump for station 834734",
      location: "Needham, MA",
    },
    {
      name: "Saint Mary Street Pump Station: CNTRF105M847638",
      modelNumber: "CNTRF14",
      serialNumber: "CNTRF10B7836748CC",
      description: "Pump for station 834639",
      location: "Needham, MA",
    },
    {
      name: "Saint Mary Street Pump Station: CNTRF105M847638",
      modelNumber: "CNTRF15",
      serialNumber: "CNTRF10B7836748CC",
      description: "Pump for station 834734",
      location: "Needham, MA",
    },
    {
      name: "Saint Mary Street Pump Station: CNTRF105M847638",
      modelNumber: "CNTRF18",
      serialNumber: "CNTRF10B7836748CC",
      description: "Pump for station 834639",
      location: "Needham, MA",
    },
  ]);
  return <HomeScreenView data={data}></HomeScreenView>;
};

export default HomeScreenWrapper;
