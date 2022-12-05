import { useEffect, useState } from "react"

const useBuyer = email=>{
    const [isBuyer, setIsBuyer]=useState(false)
    useEffect(()=>{
        fetch(`https://car-resale-server-nurmohammad83.vercel.app/users/buyer/${email}`,{
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