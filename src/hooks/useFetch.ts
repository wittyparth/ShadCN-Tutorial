import { useEffect, useState } from "react"


interface ReturnType<T> {
    data : T | null,
    loading : boolean,
    error : string | null
}

const useFetch = <T>(url : string):ReturnType<T>  => {
    const [state,setState] = useState<ReturnType<T>>({
        data : null,
        loading : false,
        error : null
    })
    useEffect(()=>{
        const fetchData = async() => {
            try{
                setState((prev)=>({...prev,loading:true}))
                const res = await fetch(url)
                const data = await res.json()
                setState((prev)=>({...prev,data}))
            }
            catch(err:unknown){
                console.log(err)
                setState(prev => ({...prev,
                    error : err instanceof Error ?err.message:"unknown error"}
                ))
            }
            finally{
                setState(prev => ({...prev,laoding:false}))
            }
        }
        fetchData()
    },[url])
    return state
}

export default useFetch