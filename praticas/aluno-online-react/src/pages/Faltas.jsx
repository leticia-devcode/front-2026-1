import Main from "../components/Main.jsx"
import Sidebar from "../components/SideBar.jsx"
import Tabela from "../components/Tabela.jsx"
import Menu from "../components/Menu";
function Faltas() { 

    const colunas = 
    [

        "Disciplina",
        "Total de Faltas",
        "% de Presença",

    ];

        const Faltas = [
    [

        ["BI e Data Warehousing", "0", "100%"],
        ["Construção de Frontend", "0", "100%"],
        ["Manutenção de software e DevOps", "0", "100%"],

    ],
    [

        ["Construção de Backend", "27", "87,5%"],
        ["Estrutura de Dados", "0", "85%"],
        ["Gerenciamento de Projetos", "0", "82,5%"],
    ],
    ];

    return (

        <section >


            <Main 

                titulo="Minhas Faltas"
                subtitulo="Historico de faltas por semestre"

            >

                <Tabela 
                    
                    titulo="2026.1"
                    colunas={colunas}
                    dados={Faltas[0]}

                />
                
                <Tabela 
                    
                    titulo="2025.2"
                    colunas={colunas}
                    dados={Faltas[1]}
                
                />

            </Main>
        </section>
    );
 }

 export default Faltas;