import { Link } from "@remix-run/react"
import { formatearFecha } from '~/utils/helpers'

export default function Post({post}) {
    const {titulo, contenido, imagen, url, publishedAt} = post
    // console.log(post)
    return (
        <article className="post">
            <div>
                <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />
            </div>
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`}>Ir al Post</Link>
            </div>
        </article>
    )
}
