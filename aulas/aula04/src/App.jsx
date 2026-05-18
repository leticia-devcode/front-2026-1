import { Routes, Route } from "react-router";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import About from "./pages/About";
import Erro404 from "./pages/Erro404";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfil/:id" element={<Perfil />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Erro404 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
