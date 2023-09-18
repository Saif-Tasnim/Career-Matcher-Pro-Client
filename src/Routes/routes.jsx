import {
    createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layout/Main";
import HomePage from "../page/HomePage/HomePage";
import LogIn from "../page/EntryPage/LogIn/LogIn";
import Register from "../page/EntryPage/Register/Register";
import UserLayout from "../layout/UserLayout";
import UserPage from "../page/UserPage/UserPage";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                }
            ],
            errorElement: <ErrorPage></ErrorPage>
        },

        {
            path: 'login',
            element: <LogIn></LogIn>,
            errorElement: <ErrorPage></ErrorPage>
        },

        {
            path: 'signup',
            element: <Register></Register>,
            errorElement: <ErrorPage></ErrorPage>
        },

        {
            path: 'dashboard',
            element: <UserLayout></UserLayout>,
            children: [
                {
                    path: 'dashboard',
                    element: <UserPage></UserPage>
                }

            ],
            errorElement: <ErrorPage></ErrorPage>
        }
    ]
)