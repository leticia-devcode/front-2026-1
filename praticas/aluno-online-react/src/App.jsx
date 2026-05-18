import {Routes, Route} from "react-router"
import "./App.css";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Layout from "./layouts/Layout";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/boletos" element={<Boletos />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faltas" element={<Faltas />} />
      <Route path="/notas" element={<Notas />} />
      <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  );
}

export default App;
