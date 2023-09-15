import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ title, path }) => {
    return (
        <div>
            <Link
                className={`flex items-center justify-between gap-4 rounded-lg border border-current px-3 py-2 text-indigo-600 transition-colors text-sm hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500
            
            `}
                to={path}
            >
                <span className="font-medium transition-colors text-white">
                    {title}
                </span>

                <span
                    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
                >
                    <svg
                        className="h-2 w-2 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </Link>
        </div>
    );
};

export default Button;