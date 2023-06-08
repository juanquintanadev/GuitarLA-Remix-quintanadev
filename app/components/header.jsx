import { Link } from "@remix-run/react"
import Navegacion from "./navegacion"
import Logo from '../../public/img/logo.svg'

function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/' prefetch="render">
          <img className="logo" src={Logo} alt="imagen logo" />
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header