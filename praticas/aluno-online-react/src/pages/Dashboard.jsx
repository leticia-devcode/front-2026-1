import Card from "../components/Card.jsx";
import Main from "../components/Main.jsx"
import Sidebar from "../components/SideBar.jsx"

function Dashboard() { 

    const avisos = 
    [
        "Eleição para representante de turma",
        "Inscrição para o projeto de extensão",
    ];
    
    const datas = 
    [
        "27/04 - Avaliação P1"
    ]

    const disciplinas = 
    [
        "Construção de Frontend",
        "DevOps",
        "Business Intelligence"
    ]

    return (
        
        <section >

            <Main 
            
                titulo="Olá, aluno"
                subtitulo="Bem-vindo ao portal do aluno"

            >

                <Card titulo="Mural de avisos" itens={avisos} />
                <Card titulo="Calendário acadêmico" itens={datas} />
                <Card titulo="Minhas disciplinas" itens={disciplinas} />

            </Main>
        
        </section>
    );
 }

 export default Dashboard;