import Topbar from "./Topbar";
import Card from "./Card";

function Main(props) {

    return ( 
    
    <main className="flex flex-col w-full">
        
        <Topbar 
            
            titulo={props.titulo}
            subtitulo={props.subtitulo}
        
        />
        
        <section>
            
            {props.children}
        
        </section>


    </main>
        
);
}

export default Main;