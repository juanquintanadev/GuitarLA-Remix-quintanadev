import { Outlet, useOutletContext } from "@remix-run/react"

function Contacto() {
  return (
    <main>
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Contacto