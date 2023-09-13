import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage/ErrorPage";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App></App>,
            errorElement: <ErrorPage></ErrorPage>
        }
    ]
)