import Navegacion from "./navegacion"

function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>
            <p className="copyright">Todos los derechos reservados. Juan Quintana DEV {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer