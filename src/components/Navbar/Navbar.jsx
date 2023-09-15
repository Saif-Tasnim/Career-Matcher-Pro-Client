import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import { useGsap } from "../../hooks/useGsap";
import { useEffect, useRef } from "react";


const Navbar = () => {

    const [tl, ease] = useGsap();

    let logo = useRef(null);
    let link1 = useRef(null);
    let link2 = useRef(null);
    let link3 = useRef(null);
    let login = useRef(null);

    useEffect(() => {
        tl.from(logo, 1, {
            opacity: 0,
            y: 100,
            ease: ease
        })

        tl.from([link1, link2, link3, login], 1.5, {
            opacity: 0,
            y: -200,
            stagger: {
                amount: 0.5
            },
            ease: ease
        })


    })



    return (

        <nav id="nav">
            <div className="bg-[#242424] text-white max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8 h-[100px]">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/'>
                        <div className="text-center sm:text-left hover:cursor-pointer
                        translate-y-0
                        "
                            ref={el => logo = el}
                             
                        >
                            <h1 className="text-2xl font-bold sm:text-3xl"
                            >
                                Career Matcher Pro
                            </h1>
                        </div>
                    </Link>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center list-none">

                        <li className="px-3" ref={el => link1 = el}>
                            <Link to="/"> Home </Link>
                        </li>

                        <li className="px-3" ref={el => link2 = el}>
                            <Link to="/"> See Jobs </Link>
                        </li>
                        <li className="px-3" ref={el => link3 = el}>
                            <Link to="/"> Take Job Preparations </Link>
                        </li>


                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center" ref={el => login = el}>
                        <Button key="/login" path='/login' title="Login"></Button>
                    </div>
                </div>
            </div >
        </nav >
    );
};

export default Navbar;