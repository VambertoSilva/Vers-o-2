import React, { useState } from "react";

import Styles from "./Add.module.css";

const Add = (props) => {
  const ClickHandler = () => {
    props.OpenModal();
  };

  return (
    <div className={Styles.Container}>
      <h2 className={Styles.Title}>Minhas Finanças</h2>

      <button className={Styles.Button} onClick={ClickHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class={`bi bi-plus ${Styles.Add}`}
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};

export default Add;
