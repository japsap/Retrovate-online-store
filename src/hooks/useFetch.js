import { useEffect, useState } from 'react'

const useFetch = (url, brackets) => {
  
  const [ data, setData ] = useState(brackets)

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
  }, [])

  return [ data, setData ]
}

export default useFetch