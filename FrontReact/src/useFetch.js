import React from 'react'

const useFetch = (url) => {
    
    const [data,setData]=React.useState(null);
    const [isPending,setIsPending]=React.useState(true)
    const [error,setError]=React.useState(null)

    React.useEffect(()=>{
        const abortCont = new AbortController()

        fetch(url,{signal: abortCont.signal})
        .then(res=>{
            if(!res.ok){
            throw Error('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then((data)=>{
            setData(data)
            setIsPending(false)
            setError(null)
            })
        .catch(err=>{
            if( err.name ===' AbortError'){
                console.log('fetch aborted')
                return;
                }
            else{
                setIsPending(false)
                setError(err.message)
                }
            })
            return ()=> abortCont.abort()
    },[url])
    return {data,isPending,error}
}
 
export default useFetch;