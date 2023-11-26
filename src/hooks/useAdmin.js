import { useEffect, useState } from "react"

const useAdmin = (email)=>{
    const [isAdmin, setAdmin]=useState(false)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER}/users/admin/${email}`,{
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