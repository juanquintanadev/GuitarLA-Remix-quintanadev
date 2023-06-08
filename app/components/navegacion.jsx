import { Link, useLocation } from "@remix-run/react"

import imagenCarrito from '../../public/img/carrito.png'

function Navegacion() {

    const location = useLocation()

    return (
        <nav className="navegacion">
            <Link
                to='/'
                prefetch="render"
                className={location.pathname == '/' ? 'active' : ''}
            >Inicio</Link>
            <Link
                to='/nosotros'
                prefetch="render"
                className={location.pathname == '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to='/guitarras'
                className={location.pathname == '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to='/posts'
                prefetch="render"
                className={location.pathname == '/posts' ? 'active' : ''}
            >Blog</Link>
            <Link
                to='/carrito'
            >
                <img className="carrito" src={imagenCarrito} alt="imagen carrito"/>
            </Link>
        </nav>
    )
}

export default Navegacion