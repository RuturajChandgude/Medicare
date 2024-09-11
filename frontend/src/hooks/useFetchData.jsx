import {useEffect,useState} from 'react'
import { token} from '../config'
//import {toast} from 'react-toastify'

const useFetchData = (url) => {

  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
        setLoading(true)

        try {
            const res=await fetch(url,{
                headers:{Authorization : `Bearer ${token}`}
            })

            const result=await res.json()
           // console.log('API Response:', result);
            if(!res.ok)
            {
                throw new Error(result.message)
            }
            
            setData(result.data)
            //setData(result.data ||  result)
            setLoading(false)
             
        } catch (error) {
            setLoading(false)
            setError(error.message)
            //toast.error(error.message); // Display error message
        }
    };
    fetchData()
  },[url])

  return {
   data,loading,error, 
  }

}

export default useFetchData
