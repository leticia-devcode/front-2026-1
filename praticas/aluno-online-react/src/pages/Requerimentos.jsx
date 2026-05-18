import Main from "../components/Main";
import Sidebar from "../components/SideBar";
import Tabela from "../components/Tabela";
import Menu from "../components/Menu";
function Requerimentos() {

    const colunas = 
    [

        "Tipo de Requerimento",
        "Data de Solicitação",
        "Situação"

    ];
    
    const Requerimentos = [
    [

        ["Revisão de menção", "15/12/2025", "Indeferido"],
        ["Dispensa de disciplina", "12/06/2025", "Indeferido"],
        ["Trancamento da matrícula", "05/01/2024", "Deferido"],
        ["Mudança de turno", "10/10/2023", "Deferido"],
        ["Renovação da matrícula", "20/02/2023", "Deferido"],        

    ],
    ];

    return (

        <section>

        <Main 
        
            titulo="Meus requerimentos"
            subtitulo="Faça solicitações online para a secretaria"
            
        >

            <Tabela 
                
                colunas={colunas} 
                dados={Requerimentos[0]}
            
            />
            
        </Main>

        </section>
    );
}

export default Requerimentos;