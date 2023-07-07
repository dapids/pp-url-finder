import type { User } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSwr<User[]>('/api/urls', fetcher)

  if (error) return <div>Failed to load urls</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
