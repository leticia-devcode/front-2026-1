import avatar from '../assets/avatar.svg';

function Topbar(props) {

    return (
    
    <main className='m-4 mt-8'>
    
        <header className='flex justify-between items-center'>
        
            <h1 className='font-bold text-lg'>{props.titulo}</h1>
            <img src={avatar} alt="imagem do avatar" />
        
        </header>

        <h2 className='mt-8 flex justify-between items-center font-bold'>{props.subtitulo}</h2>

    </main>
    );

}

export default Topbar;