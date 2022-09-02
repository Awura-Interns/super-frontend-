import { useContext, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContect";
const PrivateRoute = ({children, ...rest})=>{
    const { user } = useContext(AuthContext)
    const authTokens= localStorage.getItem("authTokens")
    const { refreshUser } = useContext(AuthContext)
    useEffect(()=>{
        if(authTokens!= null){
            refreshUser()    
        } 
    },[]
    ) 
    if(user === null){
        return(
            <Navigate to="/Loginform"/>
        )
    }
    return children
}
export default PrivateRoute;