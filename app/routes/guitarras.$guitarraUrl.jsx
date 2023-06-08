import { Link, useLoaderData, useOutletContext } from "@remix-run/react"
import { useState } from "react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({params}) {
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)
    return guitarra
}

function GuitarraUrl() {
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    const {agregarCarrito} = useOutletContext()
    

    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return
        }
        const guitarraSeleciconada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        }
        agregarCarrito(guitarraSeleciconada)
    }
    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt="imagen guitarra" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">$ {precio}</p>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Seleccione cantidad</label>
                    <select onChange={e => setCantidad(parseInt(e.target.value))} id="cantidad">
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" name="" id="" value='Agregar al carrito' />
                </form>
                <Link to='/guitarras' className="enlace">Volver</Link>
            </div>
        </div>
    )
}

export default GuitarraUrl