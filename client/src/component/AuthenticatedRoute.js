 import React,  { useContext } from "react";
 import {Route , Redirect} from "react-router-dom"
import MonContexte from "./context/Auth";
 const AuthenticatedRoute =({path,component})=>{
    const {isAuthenticated}= useContext(MonContexte);
    return isAuthenticated?(
        <Route exact path={path} component={component}/>
    ):( 
        <Redirect to="/acceuil/login"/>
    )
 }
 export default AuthenticatedRoute