import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Tabela from "../components/Tabela";
import Main from "../components/Main";
import Menu from "../components/Menu";
function Notas() {

    const colunas = 
    [

        "Disciplina",
        "P1",
        "P2",
        "P3",
        "Menção"

    ];
    
    const Notas = [
    [

        ["BI e Data Warehousing", "", "", "", "SR"],
        ["Construção de Frontend", "", "", "", "SR"],
        ["DevOps", "", "", "", "SR"],

    ],
    [

        ["Estrutura de Dados", "5.5", "5.5", "5.5", "MM"],
        ["Construção de Backend", "5.5", "5.5", "5.5", "MM"],
        ["Gerenciamento de Projetos", "5.5", "5.5", "5.5", "MM"],
    ],
    [

        ["Enegenharia de Software", "10", "10", "10", "SS"],
        ["Dispositivos Moveis", "10", "10", "10", "SS"],
        ["Estatistica", "10", "10", "10", "SS"],

    ]
    ];

    return (

        <section>


            <Main 
            
                titulo="Minhas Notas" 
                subtitulo="Historico de notas por semestre"
                
            >

                <Tabela 
                    
                    titulo="2026.1" 
                    colunas={colunas} 
                    dados={Notas[0]}
                
                />
                
                <Tabela 
                    
                    titulo="2025.2" 
                    colunas={colunas} 
                    dados={Notas[1]}
                
                />

                <Tabela 
                    
                    titulo="2025.1" 
                    colunas={colunas} 
                    dados={Notas[2]}
                
                />

            </Main>

        </section>

    );

}

    export default Notas;