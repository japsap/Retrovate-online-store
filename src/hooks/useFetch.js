import { useEffect, useState } from 'react'

const useFetch = (url, brackets) => {
  
  const [ data, setData ] = useState(brackets)
  const [ isLoading, setIsloading ] = useState(false)

  useEffect(() => {
    setIsloading(true)
    const fetchData = async () => {
      const r = await fetch(url)
      const d = await r.json()

      setTimeout(() => {
        setData(d)
        setIsloading(false)
      }, 10000);
        
    }

    fetchData()
  }, [])

  return [ data, setData, isLoading ]
}

export default useFetch