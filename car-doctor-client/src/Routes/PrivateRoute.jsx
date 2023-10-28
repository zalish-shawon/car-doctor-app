/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    

    if (loading) {
        return  <div className="loading-container">
        <span className="loading text-4xl loading-infinity loading-lg"></span>
      </div>
       
    }

    if(user?.email) {
        return children
    }

    return (
        <Navigate state={location.pathname } to={'/login'} replace></Navigate>
    );
};

export default PrivateRoute;