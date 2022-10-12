import Layout from "../../components/Layout"
import { useRouter } from "next/router"

interface UserProps {
  dataUsers: Array<any>
}

export default function Users({ dataUsers }: UserProps) {
  const router = useRouter()
  return (
    <>
    <Layout pageTitle="Users">
        {
          dataUsers.map((user) => {
            return (
              <div key={user.id} className="mb-3 cursor-pointer" onClick={() => router.push(`/users/${user.id}`)}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            )
          })
        }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    }
  }
}