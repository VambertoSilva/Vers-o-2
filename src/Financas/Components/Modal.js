import React, { useState } from "react";
import Styles from "./Modal.module.css";

const Modal = (props) => {
  //State

  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [creditCart, setCreditCard] = useState("");
  const [notice, setNotice] = useState(false);
  const [noticeValue, setNoticeValue] = useState(false);

  // functions

  const InputTxtHandler = (props) => {
    setValue(props.target.value);
  };

  const RadionHandler = (value) => {
    if (value.target.name === "type") {
      setType(value.target.value);
    }
    if (value.target.name === "creditCard") setCreditCard(value.target.value);
  };

  const SendHandler = () => {
    if (type && value) {
      props.SetRevenue(value, type);
      props.OpenModal();
    } else if (!type) {
      setNotice(true);
    }
    if (!value) {
      setNoticeValue(true);
    }
  };

  const CloseHandler = () => {
    props.OpenModal();
  };

  //return
  return (
    <div className={Styles.background}>
      <div className={Styles.Modal}>
        <h1 className={Styles.Title}>Adicionar novo</h1>
        <div className={Styles.MasterContainer}>
          <div className={Styles.RadioContainer}>
            <input
              className={Styles.Radio}
              type="radio"
              name="type"
              value="revenue"
              onChange={RadionHandler}
            />
            <label className={Styles.RadioOne}>Receita</label>
            <input
              className={Styles.Radio}
              type="radio"
              name="type"
              onChange={RadionHandler}
              value="expense"
            />
            <label className={Styles.RadioTwo}>Despesa</label>
          </div>
          <div>
            <input
              className={Styles.Radio}
              type="radio"
              value="creditCard"
              name="type"
              onChange={RadionHandler}
            />
            <label className={Styles.RadioTree}>Cartão de crédito</label>
          </div>
          <input
            className={Styles.Input}
            placeholder="Valor"
            onChange={InputTxtHandler}
          />
          {notice ? (
            <p className={Styles.Notice}>
              Falta preencher o campo do tipo
              <br /> do valor
            </p>
          ) : (
            ""
          )}{" "}
          {noticeValue ? (
            <p className={Styles.Notice}>Falta preencher o campo do valor</p>
          ) : (
            ""
          )}
        </div>
        <div className={Styles.BtnContainer}>
          <button className={Styles.Send} onClick={SendHandler}>
            Enviar
          </button>
          <button className={Styles.Cancel} onClick={CloseHandler}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
