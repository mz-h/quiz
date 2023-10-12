import { authenticated_routes } from "./authenticated";
import { public_routes } from "./public";
import { useRoutes } from "react-router-dom";


export const AppRouter = () => { 
    let element =  useRoutes( [...authenticated_routes, ...public_routes])
    return element
  }