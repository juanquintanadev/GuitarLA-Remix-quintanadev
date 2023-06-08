import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    Link,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
} from '@remix-run/react'
import styles from '~/styles/index.css'

import Header from '~/components/header'
import Footer from '~/components/footer';

// aca vamos a colocar la informacion que se va a agregar en meta que es la parte superior de nuestro head
export function meta() {
    return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
        },
        
    ]
}

// funcion principal que renderiza
export default function App() {

    // iniciamos el LS 
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) : []
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        if(typeof window !== 'undefined') {
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        
    }, [carrito])

    function agregarCarrito(guitarra) {

        // si existe la guitarra seleccionada entonces no es un registro nuevo
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraMap => {
                if(guitarraMap.id === guitarra.id) {
                    guitarraMap.cantidad = guitarra.cantidad
                }
                return guitarraMap
            })
            setCarrito(carritoActualizado)
        } else {
            // si no existe la guitarra seleccionada entonces es un registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }
    function actualizarCantidad(guitarra) {
        const carritoActualizado = carrito.map(guitarraMemoria => {
            if(guitarraMemoria.id === guitarra.id) {
                guitarraMemoria.cantidad = guitarra.cantidad
            }
            return guitarraMemoria
        })
        setCarrito(carritoActualizado)
    }
    function eliminarGuitarra(id) {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }
    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    );
}

// lo usamos como componente con el contenido que queremos mostrar
function Document({children}) {

    return (
        <html lang='es'>
            <head>
                <Meta/>
                <Links/>
                <script src="http://localhost:8097"></script>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

// manejo de errores
export function ErrorBoundary() {
    const error = useRouteError()
    if(isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>Error: {error.status}</p>
                <p className='error'>Tipo: {error.statusText}</p>
                <Link className='error-enlace' to="/">Volver a la Página Principal</Link>
            </Document>
        )
    }
}