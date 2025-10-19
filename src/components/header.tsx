import { Link } from 'react-router-dom';
import logoHeader from '../assets/logoHeader.png';

const Header = () => {
    return(<>
        <div className="w-full h-auto flex justify-around bg-cornsilk gap-5 items-center">
            <div className='w-60 h-auto p-2'>
                <Link to="/" className=''>
                    <img src={logoHeader} alt="Logo" className='h-auto w-auto pl-2'/>
                </Link>
            </div>
            <div className='w-full flex justify-evenly text-burnUmber text-lg'>
                <Link to="/" className='font-semibold no-underline hover:text-cooper'>Productos</Link>
                <Link to="/" className='font-semibold no-underline hover:text-cooper'>Nosotros</Link>
                <Link to="/" className='font-semibold no-underline hover:text-cooper'>Contacto</Link>
            </div>
            <div className='flex'>
                <button className='bg-cooper text-white p-2 m-2 rounded hover:bg-sunset'>Login</button>
                <button className='bg-cooper text-white p-2 m-2 rounded hover:bg-sunset'>Carrito</button>
            </div>
        </div>
    </>)
}

export default Header;