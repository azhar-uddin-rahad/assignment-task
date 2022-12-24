import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Register from '../pages/Register/Register';

const routes = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children:[
          
         {
            path: '/',
            element:<Register></Register>,
           // loader: ()=> fetch("http://localhost:5000/news")
          
            },

        ]
    }




]) 
   
    


export default routes;