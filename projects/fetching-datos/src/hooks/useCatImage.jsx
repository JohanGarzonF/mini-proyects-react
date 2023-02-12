import { useEffect, useState } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com/'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen con la primera palabra
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
