import { useEffect } from 'react'
import { setSeo } from '../utils/seo'

type SeoProps = {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    setSeo(title, description)
  }, [title, description])

  return null
}
