import Styles from "./Main.module.css";
import MyDatePicker from "./MyDatePicker";

const Main = () => {
  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>Liberte-se e Descubra Novos Caminhos!</h1>
      <div className={Styles.container}>
        <h1 className={Styles.titleContainer}>ALUGUEL DE CARROS</h1>
        <div className={Styles.inputs}>
          <input
            placeholder="Local de retirada"
            className={`${Styles.input} ${Styles.input1}`}
          />
          <input
            placeholder="Local de entrega"
            className={`${Styles.input} ${Styles.input2}`}
          />

          <input
            type="date"
            placeholder="Data de Retirada"
            className={`${Styles.input} ${Styles.input3}`}
          />
          <input
            placeholder="Horario"
            className={`${Styles.input} ${Styles.input4}`}
          />

          <input
            type="date"
            placeholder="Data de devolução"
            className={`${Styles.input} ${Styles.input5}`}
          />
          <input
            placeholder="Horario"
            className={`${Styles.input} ${Styles.input6}`}
          />

          <button className={Styles.button}>BUSCAR CARROS</button>
        </div>
        <div className={Styles.check}>
          <input type="checkbox" className={Styles.Devolver} />
          <label className={Styles.titleDevolver}>
            Devolver em outro local
          </label>
        </div>
      </div>
    </div>
  );
};

export default Main;
