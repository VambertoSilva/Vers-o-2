import "./App.css";
import PaginaPrincipal from "./PaginaPrincipal";
import Financas from "./Financas/App";
import Farp from "./FARP/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Financas" element={<Financas />} />
        <Route path="/Farp" element={<Farp />} />
      </Routes>
    </Router>
  );
}

export default App;
