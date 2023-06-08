import { useLoaderData } from '@remix-run/react'

import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoBlog from '~/components/listado-blog'
import Curso from '~/components/curso'

import {getGuitarras} from '~/models/guitarras.server'
import {getPosts} from '~/models/posts.server'
import { getCursos } from '~/models/curso.server'

import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/posts.css'
import stylesCurso from '~/styles/cursos.css'

export function meta() {
  return [
    {title: 'GuitarLA-INICIO'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {

  const [guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data
  }
}

function Index() {

  const {guitarras, posts, cursos} = useLoaderData()
  // console.log(cursos)

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
      <section>
        <Curso 
          cursos={cursos.attributes}
        />
      </section>
      <section className='contenedor'>
        <ListadoBlog
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index