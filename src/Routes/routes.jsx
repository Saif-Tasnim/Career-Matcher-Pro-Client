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
import SeeJobs from "../page/HomePage/SeeJobs";
import PrivateRoutes from "./PrivateRoutes";
import JobPreparation from "../page/HomePage/JobPreparation";
import PostJob from "../page/UserPage/PostJob";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                },
                {
                    path: "searchJobs",
                    element: <SeeJobs></SeeJobs>
                },
                {
                    path: "jobPreparation",
                    element: <PrivateRoutes><JobPreparation></JobPreparation></PrivateRoutes>
                },
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
                },
                {
                    path: 'postJob',
                    element: <PostJob></PostJob>
                },

            ],
            errorElement: <ErrorPage></ErrorPage>
        }
    ]
)