import React, { PureComponent } from "react";
import Styles from "./Charts.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const Chart = (props) => {
  const data = [
    {
      name: "Jan",
      uv: props.Dados[0][props.Card],
    },
    {
      name: "Fev",
      uv: props.Dados[1][props.Card],
    },
    {
      name: "Mar",
      uv: props.Dados[2][props.Card],
    },
    {
      name: "Abr",
      uv: props.Dados[3][props.Card],
    },
    {
      name: "Maio",
      uv: props.Dados[4][props.Card],
    },
    {
      name: "Jun",
      uv: props.Dados[5][props.Card],
    },
    {
      name: "Jul",
      uv: props.Dados[6][props.Card],
    },
    {
      name: "Ago",
      uv: props.Dados[7][props.Card],
    },
    {
      name: "Set",
      uv: props.Dados[8][props.Card],
    },
    {
      name: "Out",
      uv: props.Dados[9][props.Card],
    },
    {
      name: "Nov",
      uv: props.Dados[10][props.Card],
    },
    {
      name: "Dez",
      uv: props.Dados[11][props.Card],
    },
  ];

  const card = props.Card;

  return (
    <ResponsiveContainer width="90%" height="80%" classname={Styles.Charts}>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#16fd01" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
