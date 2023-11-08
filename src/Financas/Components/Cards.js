import React from "react";
import Chart from "./Chart";

import Styles from "./Cards.module.css";

const Cards = (props) => {
  const number = props.value * 1;
  const formatedNumber = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={Styles.Container}>
      <p className={Styles.Title}>{props.title}</p>
      <p className={Styles.Value}>{formatedNumber}</p>
    </div>
  );
};

export default Cards;
