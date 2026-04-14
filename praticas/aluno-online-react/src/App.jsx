import "./App.css";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";

function App() {
  
  const pagina = 2;

  switch (pagina) 
  {

    case 1: return <Dashboard />;
    case 2: return <Faltas />;
    case 3: return <Notas />;
    case 4: return <Requerimentos />;
    case 5: return <Boletos />;

  }

}

export default App;
