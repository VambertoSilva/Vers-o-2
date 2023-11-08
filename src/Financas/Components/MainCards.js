import React from "react";
import Styles from "./MainCards.module.css";
import Chart from "./Chart";

const MainCards = (props) => {
  return (
    <div>
      <h1 className={Styles.title}>{props.title}</h1>
      <div className={Styles.box}>
        <Chart margin-top="4px" Dados={props.Dados} Card={props.Card} />
      </div>
    </div>
  );
};

export default MainCards;
