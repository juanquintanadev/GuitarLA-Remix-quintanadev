import { useState, useEffect } from 'react'
import { ClientOnly } from 'remix-utils'
import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'

export function meta() {
  return [
    {title: 'GuitarLA-Carrito de compras'},
    {description: 'Carrito de compras'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Carrito() {
  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

  useEffect(() => {
    const totalPagar = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(totalPagar)
  }, [carrito])
  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="contenido">
            <div className='carrito'>
              <h2>Artículos</h2>
              {carrito?.length === 0 ? (
                <p>Carrito Vacio</p>
              ) : (
                carrito.map(producto => (
                  <div
                    key={producto.id}
                    className='producto'
                  >
                    <div>
                      <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                    </div>
                    <div>
                      <p className='nombre'>{producto.nombre}</p>
                      <p>Cantidad:</p>
                      <select 
                        value={producto.cantidad} 
                        className='select'
                        onChange={e => actualizarCantidad({
                          cantidad: +e.target.value,
                          id: producto.id
                        })}
                      >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                      </select>
                      <p className='precio'>$ <span>{producto.precio}</span></p>
                      <p className='subtotal'>Subtotal: $ {producto.cantidad * producto.precio}</p>
                    </div>
                    <button
                      type='button'
                      className='btn_eliminar'
                      onClick={() => eliminarGuitarra(producto.id)}
                    >X</button>
                  </div>
                ))
              )}
            </div>
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  )
}
