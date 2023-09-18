import { Outlet } from "react-router-dom";
import UserNav from "../components/User/UserNav/UserNav";
import Footer from '../components/common/Footer/Footer' ;

const UserLayout = () => {
    return (
        <div>
            <UserNav></UserNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default UserLayout;