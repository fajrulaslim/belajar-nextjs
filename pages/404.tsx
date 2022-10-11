import React, { useEffect } from 'react'
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])
  
  return (
    <>
      <div className="text-center">404</div>
    </>
  )
}