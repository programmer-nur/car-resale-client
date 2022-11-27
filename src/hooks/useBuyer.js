import { useEffect, useState } from "react"

const useBuyer = email=>{
    const [isBuyer, setIsBuyer]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/buyer/${email}`,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            setIsBuyer(data.isBuyer)
        })
    },[email])
    return([isBuyer])
}

export default useBuyer