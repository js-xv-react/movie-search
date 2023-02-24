import React from "react";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Loading from "../components/Loading/Loading";
import Search from "../components/Search/Search";

const HomeView = () => {
  return (
    <div>
      <h2>Home View</h2>
      <div>
        <Search />
        <ErrorMsg>errorMessage</ErrorMsg>
        <Loading />
      </div>
    </div>
  );
};

export default HomeView;
