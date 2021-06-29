import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import dotenv from "dotenv";
import Routes from "@routes/Routes";
import Loading from "@utils/Loading";
dotenv.config();

const Root = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  // middleware
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return !isLoading ? (
    <>
      <Helmet meta={[{ name: "title", content: "Title area" }]}></Helmet>
      <Routes />
    </>
  ) : (
    <Loading />
  );
};

export default Root;
