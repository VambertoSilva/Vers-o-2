import React, { useState, Fragment } from "react";
import Styles from "./App.module.css";
import Month from "./Components/Month";
import Add from "./Components/Add";
import Cards from "./Components/Cards";
import MainCards from "./Components/MainCards";
import Modal from "./Components/Modal";

function App() {
  // Staten

  const [month, setMonth] = useState(new Date().getMonth());
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [creditCard, setCreditCard] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  //Month

  const [monthObj, setMonthObj] = useState([
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
    {
      revenue: 0,
      expense: 0,
      creditCard: 0,
    },
  ]);

  const getMonth = (value) => {
    setMonth(value);
    // console.log(month);
  };

  // Function

  const handlerRevenue = (value, type) => {
    if (type === "revenue") {
      monthObj[month].revenue = monthObj[month].revenue * 1 + value * 1;
      setMonthObj(monthObj);
      // console.log(
      //   "veio aqui: " +
      //     monthObj[month].revenue +
      //     " : " +
      //     monthObj[month].month +
      //     " : " +
      //     month
      // );
    }
    if (type === "expense") {
      monthObj[month].expense = monthObj[month].expense * 1 + value * 1;
      setMonthObj(monthObj);
    }
    if (type === "creditCard") {
      monthObj[month].creditCard = monthObj[month].creditCard * 1 + value * 1;
      setMonthObj(monthObj);
    }
  };

  const OpenModal = () => {
    if (!modalStatus) {
      setModalStatus(true);
    } else {
      setModalStatus(false);
    }
  };

  //Return

  return (
    <>
      <div className={Styles.background}>
        <div
          className={modalStatus ? Styles.ContainerWithBlur : Styles.Container}
        >
          <Month SetMonth={getMonth} />

          <Add OpenModal={OpenModal} />
          <div className={Styles.Cards}>
            <Cards
              title={"Saldo atual"}
              value={monthObj[month].revenue - monthObj[month].expense}
            />
            <Cards title={"Receitas"} value={monthObj[month].revenue} />
            <Cards title={"Despesas"} value={monthObj[month].expense} />
            <Cards
              title={"Cartão de crédito"}
              value={monthObj[month].creditCard}
            />
            {/* <Cards title={`${monthObj[month].revenue}`} value={creditCard} /> */}
          </div>
          <div className={Styles.mainCards}>
            <MainCards title="Receitas" Dados={monthObj} Card={"revenue"} />
          </div>
          <div className={Styles.mainCards}>
            <MainCards title="Despesas" Dados={monthObj} Card={"expense"} />
          </div>
          <div className={Styles.blur}></div>
        </div>
        <div>
          {modalStatus ? (
            <Modal OpenModal={OpenModal} SetRevenue={handlerRevenue} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
