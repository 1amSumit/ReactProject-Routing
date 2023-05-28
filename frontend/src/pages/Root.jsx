import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  const naviagtion = useNavigation();
  return (
    <>
      <MainNavigation />
      {naviagtion.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
};

export default Root;
