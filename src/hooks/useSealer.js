import { useEffect, useState } from "react"

const useSealer =email=>{
    const [isSealer, setIsSealer]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/sealer/${email}`,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            setIsSealer(data.isSealer)
        })
    },[email])
    return([isSealer])
}
export default useSealer;