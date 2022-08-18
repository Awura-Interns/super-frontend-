import { createContext, useState,useEffect } from "react";
const AuthContext = createContext();


export default AuthContext;


export const AuthProvider =({children}) =>{

    let [authTokens,setAuthTokens]=useState(null);
    let [user,setUser]=useState(null)
    let loginUser=async(e)=>{
        let response= fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify({'email':null,'password':null})
        })

    }
    let contextData={
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
