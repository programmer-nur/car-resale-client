import { useEffect, useState } from "react"

const useAdmin = (email)=>{
    const [isAdmin, setAdmin]=useState(false)
    useEffect(()=>{
        fetch(`https://car-resale-server.vercel.app/users/admin/${email}`,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.isAdmin)
        })
    },[email])
    return([isAdmin])
}

export default useAdmin;