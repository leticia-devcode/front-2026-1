
function Card(props) {

    return (

            <article className="m-4 border border-gray-300 rounded-lg shadow-md">
                
                <h3 className="border-b border-gray-200 bg-gray-200 p-2 font-bold">{props.titulo}</h3>
                
                    <ul className="justify-center p-2 m-2">
                        
                        {props.itens.map((item, index) => 
                        (
                    
                            <li key={index}>{item}</li>
                    
                        ))}
                    </ul>
            
            </article>

    );

}

export default Card;
