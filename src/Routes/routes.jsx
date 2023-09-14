import {
    createBrowserRouter,
  } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layout/Main";
import HomePage from "../page/HomePage/HomePage";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children:[
               {
                path: "/",
                element: <HomePage></HomePage>
               }
            ],
            errorElement: <ErrorPage></ErrorPage>
        }
    ]
)