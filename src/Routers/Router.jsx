import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contacts from "../Pages/Contacts";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/projects',
                element: <Projects></Projects>
            },
            {
                path:'/contact',
                element: <Contacts></Contacts>
            },
            
        ]
        
    }
])
export default router