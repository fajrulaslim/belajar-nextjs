import React from 'react'
import { useRouter } from "next/router"

export default function BlogDetail() {
    const router = useRouter()
    const { id } = router.query
  return (
    <div>Blog Detail {id}</div>
  )
}
