import React, { useEffect, useState } from "react";
import styles from "@css/home/home.module.css";
import ChatHeaderComponent from "@components/Home/Child/ChatHeaderComponent";
import ChatBodyComponent from "@components/Home/Child/ChatBodyComponent";
import ChatBottomComponent from "@components/Home/Child/ChatBottomComponent";

const HomeComponent = ({ alertSet }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* eslint-disable */
  useEffect(() => {
    setIsLoading(false);
  }, []);
  /* eslint-enable */

  return !isLoading ? (
    <div className={styles.home}>
      <div className={styles.chatWrap}>
        <div className="chatHeader"></div>
        <div className="chatBody"></div>
        <div className="chatBottom"></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HomeComponent;
