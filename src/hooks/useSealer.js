import { useEffect, useState } from "react"

const useSealer =email=>{
    const [isSealer, setIsSealer]=useState(false)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER}/users/sealer/${email}`,{
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