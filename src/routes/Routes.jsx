import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import Seenews from "../components/Seenews";

import Readmore from "../components/Readmore";
import Login from "../components/Login";
import Reg from "../components/Reg";
import Privateroutes from "./Privateroutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    hydrateFallbackElement:<span className="loading absolute left-[50%] top-[50%] translate-full loading-spinner loading-xl"></span>,
    children:[{
        
      index: true,
      element: <Navigate to="/see/0"  replace/>
    
    },
        
        {
        
        path:"/see/:id",
        Component:Seenews,
        loader:()=> fetch("../news.json")
    }],
   
  },
   {
        path:"/news/:id",
       element:<Privateroutes><Readmore></Readmore></Privateroutes>,
    // Component:Readmore,
        loader:()=>fetch("../news.json")
    },{
        path:"/log",
        Component:Login
    },{

        path:"/reg",
        Component:Reg
    }
]);