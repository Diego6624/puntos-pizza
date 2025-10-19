import { Link } from 'react-router-dom';
import logoHeader from '../assets/logoa.png';
import { Phone, Pizza, Search, ShoppingCart, User, UsersRound } from 'lucide-react';

const Header = () => {
    return (<>
        <div className="px-40 py-2 w-full h-auto flex border-t-10 border-burnUmber gap-5 items-center shadow-sm">
            {/* Logo e input */}
            <div className='w-min h-auto p-2 flex items-center'>
                <Link to="/" className='w-40 h-auto'>
                    <img src={logoHeader} alt="Logo" className='h-auto w-min' />
                </Link>
                <div className='flex w-min h-auto border-2 border-cooper rounded-xl p-2 gap-3 items-center ml-4'>
                    <input type="text" placeholder='Buscar productos...' className='h-max w-50 focus:outline-none' />
                    <button className=''>
                        <Search size={20} className='text-cooper' />
                    </button>
                </div>
            </div>

            {/* Navegación */}
            <div className='w-full flex justify-end text-burnUmber text-lg gap-15 pr-5'>
                <Link to="/" className='font-semibold no-underline hover:text-cooper flex items-center gap-2 py-3'>
                    <Pizza size={20} />
                    Productos
                </Link>
                <Link to="/" className='font-semibold no-underline hover:text-cooper flex items-center gap-2 py-3'>
                    <UsersRound size={20} />
                    Nosotros
                </Link>
                <Link to="/" className='font-semibold no-underline hover:text-cooper flex items-center gap-2 py-3'>
                    <Phone size={20} />
                    Contacto
                </Link>
            </div>

            {/* Botones de usuario */}
            <div className='flex w-min h-auto justify-end items-center gap-4 text-lg'>
                <button className='bg-burnUmber h-full text-white hover:text-cornsilk p-2 rounded hover:bg-red-950 flex items-center gap-2 whitespace-nowrap'>
                    <User size={20} />
                    Iniciar Sesión
                </button>
                <button className="bg-burnUmber text-white hover:text-cornsilk p-2 rounded hover:bg-red-950 flex items-center justify-center w-[44px] h-[44px]">
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    </>)
}

export default Header;