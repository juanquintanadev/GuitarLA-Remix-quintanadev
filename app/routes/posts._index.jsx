import { useLoaderData } from "@remix-run/react"

import ListadoBlog from "~/components/listado-blog"

import { getPosts } from "~/models/posts.server"

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <div>
      <ListadoBlog
        posts={posts}
      />
    </div>
  )
}

export default Blog