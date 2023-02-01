import React from "react";
import notFound from "../../assets/notFound.png";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.container}>
      <img src={notFound} alt="notFound" />
    </div>
  );
};

export default NotFound;
