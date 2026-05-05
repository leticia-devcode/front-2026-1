import Menu from "../components/Menu";
import { useParams } from "react-router";
function Perfil(){
    const {id} = useParams();

    return (
    <>
     <h1>Perfil Usuário {id}</h1>
     <Menu />
     </>
     );
}

export default Perfil;