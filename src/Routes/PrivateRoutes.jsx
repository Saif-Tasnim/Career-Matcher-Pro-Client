/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ProgresBar from "../components/common/ProgresBar/ProgresBar";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if (loading) {
        return <ProgresBar></ProgresBar>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login" state={{from: location}} replace>  </Navigate>
    );
};

export default PrivateRoutes;