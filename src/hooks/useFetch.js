import { useEffect, useState } from 'react'

const useFetch = (url, brackets) => {
  
  const [ data, setData ] = useState(brackets)

  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch(url)
      const d = await r.json()
      setData(d)
    }

    fetchData()
  }, [])

  return [ data, setData ]
}

export default useFetch