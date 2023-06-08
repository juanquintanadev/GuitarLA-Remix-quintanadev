import Post from "./post"

export default function ListadoBlog({posts}) {
    // console.log(posts)
  return (
    <>
        <h2 className="heading">Nuestros Blogs</h2>
        {posts?.length && (
            <div className="blog">
                {posts?.map( post => (
                <Post
                    post={post?.attributes}
                    key={post?.id}
                />
                ))}
            </div>
            )
        }
    </>
  )
}
