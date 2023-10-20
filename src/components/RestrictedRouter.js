import { useSelector } from "react-redux"
import { selectIsLogined } from "./authorization/selectorAuth";
import { Navigate } from "react-router-dom";


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLogined = useSelector(selectIsLogined)
    return isLogined ? <Navigate to={redirectTo} /> : Component;
}

