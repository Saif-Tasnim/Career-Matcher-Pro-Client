import { Link } from "react-router-dom";
import Button from "../common/Button/Button";

const Navbar = () => {

    return (

        <nav id="nav">
            <div className="mx-auto bg-[#242424] text-white max-w-screen-xl px-4 py-8 sm:px-6 sm:py-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/'>
                        <div className="text-center sm:text-left hover:cursor-pointer">
                            <h1 className="text-2xl font-bold sm:text-3xl">
                                Career Matcher Pro
                            </h1>
                        </div>
                    </Link>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center list-none">

                        <li className="px-3">
                            <Link to="/"> Home </Link>
                        </li>

                        <li className="px-3">
                            <Link to="/"> See Jobs </Link>
                        </li>
                        <li className="px-3">
                            <Link to="/"> Take Job Preparations </Link>
                        </li>


                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Button key="/login" path='/login' title="Login"></Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;