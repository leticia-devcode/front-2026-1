function Tabela(props) {
    return (

    <article className="m-4 border border-gray-300 rounded-lg shadow-md">
            
            <table className="w-full">

                {props.titulo && (
                
                <caption className="bg-gray-200  p-4 font-bold text-left">
                    
                    {props.titulo}
                
                </caption>

                )}

                <thead className="bg-gray-200 font-bold">
                    
                    <tr>
                    
                        {props.colunas.map((item, index) =>
                        (   
                        
                            <th className="text-left p-2" key={index}>{item}</th>
                
                        ))}
                    
                    </tr>
                
                </thead>
    
                <tbody>
    
                    {props.dados.map((linha, index) => 
                    (

                        <tr key={index}>
                        
                            {linha.map((coluna, j) => 
                            (

                                <td className="p-2 border border-gray-300" key={j}>{coluna} </td>

                            )
                            
                            )}

                        </tr>

                    ))}
    
                </tbody>
    
            </table>
    
    </article>

    );

    
}

    export default Tabela;