import React  from "react";
import { Outlet } from 'react-router-dom';

export const AuthenticatedLayOut = () => {
    return (
        
            <Outlet />
    )
}


export default function LayOut() {
    return (
        <Outlet />
    )
}
