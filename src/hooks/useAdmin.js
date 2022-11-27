import { useEffect, useState } from "react"

const useAdmin = (email)=>{
    const [isAdmin, setAdmin]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
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