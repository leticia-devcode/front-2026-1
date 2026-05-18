import Main from "../components/Main.jsx"
import Sidebar from "../components/SideBar.jsx"
import Tabela from "../components/Tabela.jsx"
import Menu from "../components/Menu";
function Boletos() {

        const colunas = 
    [

        "Vencimento",
        "Valor R$",
        "Situação"

    ];
    
    const Boletos = [
    [

        ["19/01/2026", "500,00", "Pago"],
        ["19/02/2026", "500,00", "Pago"],
        ["19/03/2026", "500,00", "Pago"],
        ["19/04/2026", "500,00", "A pagar"],
        ["19/05/2026", "500,00", "A pagar"],
        ["19/06/2026", "500,00", "A pagar"],
        ["19/07/2026", "500,00", "A pagar"],
        ["19/08/2026", "500,00", "A pagar"],
        ["19/09/2026", "500,00", "A pagar"],
        ["19/10/2026", "500,00", "A pagar"],
        ["19/11/2026", "500,00", "A pagar"],
        ["19/12/2026", "500,00", "A pagar"],


    ],
    ];

    return (

        <section >


        <Main 
        
            titulo="Meus boletos"
            subtitulo="Histórico"   
        
        >
            
            <Tabela 
            
                colunas={colunas}
                dados={Boletos[0]}

            />
            
        </Main>

        </section>
    );
}

export default Boletos;