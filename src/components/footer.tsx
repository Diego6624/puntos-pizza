import { Link } from "react-router-dom";
import logoHeader from '../assets/logoa.png';
import visaLogo from '../assets/visa.png';
import mastercardLogo from '../assets/mastercard.png';
import yapeLogo from '../assets/yape.png';
import plinLogo from '../assets/plin.png';
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (<>
        <div className="flex flex-col h-auto bg-sunset text-burnUmber">
            <div className="flex flex-col md:flex-row justify-between px-40 py-10 w-full h-auto gap-5">
                {/* Logo y redes */}
                <div className="w-full h-full flex flex-col justify-center md:justify-start gap-5">
                    <Link to="/" className='w-full h-auto flex justify-start'>
                        <img src={logoHeader} alt="Logo" className='h-auto w-min' />
                    </Link>

                    <div className="font-semibold flex justify-center">Siguenos en nuestras redes</div>

                    <div className="flex flex-row gap-5 justify-center">
                        <a href="https://www.facebook.com/p/Pizzas-al-paso-100063580178149/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-burnUmber hover:text-cooper">
                            <Facebook size={30} className='text-burnUmber hover:text-cooper' />
                        </a>


                        <a href="https://www.instagram.com/pizzas_al_paso/?hl=es-la" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-burnUmber hover:text-cooper">
                            <Instagram size={30} className='text-burnUmber hover:text-cooper' />
                        </a>
                    </div>
                </div>

                {/* Productos */}
                <div className="w-full h-full flex flex-col justify-center">
                    <div className="font-semibold flex justify-center mb-3 text-lg">Productos</div>
                    <ul className="flex flex-col gap-2 text-center ">
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Pizzas</Link>
                        </li>
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Bebidas</Link>
                        </li>
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Postres</Link>
                        </li>
                    </ul>
                </div>

                {/* Información legal */}
                <div className="w-full">
                    <div className="font-semibold flex justify-center mb-3 text-lg">Información Legal</div>
                    <ul className="flex flex-col gap-2 text-center">
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Términos y Condiciones</Link>
                        </li>
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Política de Privacidad</Link>
                        </li>
                        <li>
                            <Link to="/" className="no-underline hover:text-cooper">Política de Cookies</Link>
                        </li>
                    </ul>
                </div>

                {/* Métodos de pago */}
                <div className="w-full h-full flex flex-col justify-center gap-2">
                    <div className="font-semibold flex justify-center mb-3 text-lg">Métodos de Pago</div>
                    <ul className="flex flex-wrap gap-2 justify-center items-center w-full h-full">
                        <li className="w-15 h-10 bg-white p-2 rounded flex justify-center items-center">
                            <img src={visaLogo} alt="" className="w-min h-min"/>
                        </li>
                        <li className="w-15 h-10 bg-white p-2 rounded flex justify-center items-center">
                            <img src={mastercardLogo} alt="" className="w-min h-min"/>
                        </li>
                        <li className="w-15 h-10 bg-white p-2 rounded flex justify-center items-center">
                            <img src={yapeLogo} alt="" className="w-min h-9"/>
                        </li>
                        <li className="w-15 h-10 bg-white p-2 rounded flex justify-center items-center">
                            <img src={plinLogo} alt="" className="w-min h-9"/>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <div className="text-center text-sm py-5">© 2024 Pizzas al Paso. Todos los derechos reservados.</div>
            </div>
        </div>
    </>)
}

export default Footer;