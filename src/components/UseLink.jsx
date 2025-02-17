import React from "react";
import { Link } from "react-router-dom";
import style from "./useLink.module.css";

const UseLink = ({ titulo, setShow, destino, svg }) => {
  return (
    <div>
      <Link to={destino} onClick={() => setShow(false)}>
        <span className={style.link}>
          <span>{titulo}</span>
          {svg}
        </span>
      </Link>
    </div>
  );
};

export default UseLink;
