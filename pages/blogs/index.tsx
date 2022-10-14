import Head from "next/head"
import Layout from "../../components/Layout"

interface Post {
  id: number,
  title: string,
  body: string,
}

interface BlogProps {
  dataBlog: Post[]
}

function Blogs({ dataBlog }: BlogProps) {
  return (
    <>
    <Layout pageTitle="Blog">
        <h1 className="mb-4">Blog</h1>
        {
          dataBlog.map((blog) => {
            return (
              <div key={blog.id} className="mb-3">
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
              </div>
            )
          })
        }
      </Layout>
    </>
  )
}
export default Blogs

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()
  return {
    props: {
      dataBlog
    }
  }
}