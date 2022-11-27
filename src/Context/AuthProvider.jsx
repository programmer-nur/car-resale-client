import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
const  auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = userInfo =>{
        
        return updateProfile(auth.currentUser,userInfo)
    }
    const createUserGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const userInfo={
        createUser,
        user,
        logIn,
        createUserGoogle,
        updateUser,
        logOut,
        loading
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unsubscribe()
        
    },[])
    
    return (
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>    
    );
};

export default AuthProvider;