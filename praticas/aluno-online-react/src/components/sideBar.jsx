import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {

    return (

        <aside className='hidden md:block bg-gray-300 max-w-screen p-4 gap-4 w-1/6 font-bold'>

            <header className='items-center flex gap-2 h-16'>

                <img src={logo} alt="learn" />
                <h1 className='text-lg'>Aluno Online</h1>

            </header>
        
        <Menu />
        
        </aside>
    
);

}

export default Sidebar;