import { useLoaderData, Link } from "@remix-run/react"
import { formatearFecha } from '~/utils/helpers'
import { getPost } from "~/models/posts.server"

export function meta({data}) {
  // si no tenemos data porq la guitarra no aparece
  if(!data) {
    return [
      { title: "Entrada de blog no encontrada" },
      { description: 'No encontramos la entrada de bloh' },
    ]
  }
  return [
    {title: `GuitarLA-${data?.titulo}`}
  ]
}

export async function loader({params}) {
  const {postUrl} = params
  const post = await getPost(postUrl)
  if(post.data.length === 0 ) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada de post no encontrada'
    })
  }
  return post?.data[0]?.attributes
}

export function Post() {

  const post = useLoaderData()
  const {titulo, contenido, publishedAt, imagen} = post

  return (
    <article className="post">
      <div>
          <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
      </div>
      <div className="contenido">
          <h3>{titulo}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className="texto">{contenido}</p>
          <Link className="enlace" to='/posts'>Volver</Link>
      </div>
    </article>
  )
}

export default Post