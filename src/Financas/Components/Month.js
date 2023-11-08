//tsrpfc
import React from "react";
import Select from "react-select";

//CSS
import Styles from "./Month.module.css";

const date = new Date();
const CurrentlyMonth = date.getMonth();

const options = [
  { value: "January", label: "Janeiro", number: 0 },
  { value: "February", label: "Fevereiro", number: 1 },
  { value: "March", label: "Março", number: 2 },
  { value: "April", label: "Abril", number: 3 },
  { value: "May", label: "Maio", number: 4 },
  { value: "June", label: "Junho", number: 5 },
  { value: "July", label: "Julho", number: 6 },
  { value: "August", label: "Agosto", number: 7 },
  { value: "September", label: "Setembro", number: 8 },
  { value: "October", label: "Outubro", number: 9 },
  { value: "November", label: "Novembro", number: 10 },
  { value: "December", label: "Dezembro", number: 11 },
];
const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#EDF3FB",
    borderRadius: "2em",
    fontFamily: "Inter",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#8B19C1" : "#EDF3FB",
    color: state.isFocused ? "white" : "black",
    fontFamily: "Inter",
    borderRadius: "1em",

    // boxShadow: "0px 7px 17px 2px rgba(0,0,0,0.29)",
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    boxShadow: "0px 7px 17px 2px rgba(0,0,0,0.29)",
    backgroundColor: "#EDF3FB",
  }),
};

function Month(props) {
  const MonthHanlder = (month) => {
    // console.log(month.number);
    props.SetMonth(month.number);
  };

  return (
    <div className={Styles.container}>
      <Select
        className={Styles.select}
        options={options}
        styles={styles}
        onChange={MonthHanlder}
        defaultValue={options[CurrentlyMonth]}
      />
    </div>
  );
}

export default Month;
