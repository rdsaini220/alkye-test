'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const changeRoute = () => router.push('/dashboard')
  useEffect(() => {
    changeRoute()
  }, [])
  return null;
}
