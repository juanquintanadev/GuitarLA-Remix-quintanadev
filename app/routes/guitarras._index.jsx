import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import {getGuitarras} from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export function links() {
  return [
      {
          rel: 'stylesheet',
          href: styles
      }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Guitarras() {

    const guitarras = useLoaderData()
    return (
        <ListadoGuitarras 
            guitarras={guitarras}
        />
    )
}

export default Guitarras