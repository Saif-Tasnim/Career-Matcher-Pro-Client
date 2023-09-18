import { useContext, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const DropDown = () => {
    const [click, setClick] = useState(false);
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("successfully logged out");
                navigate("/");
            })
    }

    return (
        <div className="dropdown">
            <label className="btn btn-solid-primary my-2 hover:cursor-pointer" onClick={() => setClick(!click)}>
                <Avatar> </Avatar>
            </label>

            {
                click &&
                <div className="flex flex-col gap-y-2 absolute bg-[#242424] p-6 right-0">
                    <Link to="/profile" className="dropdown-item text-sm mt-3"> Profile </Link>
                    <Link to="/profile" className="dropdown-item text-sm mt-3">Your Notes </Link>
                    <Link className="dropdown-item text-sm mt-3" onClick={handleLogOut} > LogOut </Link>

                </div>
            }
        </div>
    );
};

export default DropDown;