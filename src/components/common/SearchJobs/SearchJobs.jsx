import HotSlider from '../../User/HotSlider/HotSlider'

const SearchJobs = () => {
    return (
        <div className="my-20">

            <div className="relative mx-20 px-10">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="text"
                    id="Search"
                    placeholder="Search by category"
                    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-5 bg-slate-100 "
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center right-16">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                        <span className="sr-only">Search</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </div>

            <div>

                <div className="mx-auto w-[81%] my-24">
                    <h2 className="text-2xl font-bold bg-blue-300 p-3 rounded-lg"> Hot Offers 🔥 </h2>

                    <div className='my-16'>
                        <HotSlider></HotSlider>
                    </div>


                </div>

                <div className="mx-auto w-[81%] my-24">
                    <h2 className="text-2xl font-bold bg-blue-300 p-3 rounded-lg"> CSE / IT Jobs 🖥️ </h2>

                    <div className='my-16'>
                        <HotSlider></HotSlider>
                    </div>


                </div>

                <div className="mx-auto w-[81%] my-24">
                    <h2 className="text-2xl font-bold bg-blue-300 p-3 rounded-lg"> Marketing Jobs 🧑‍🤝‍🧑</h2>

                    <div className='my-16'>
                        <HotSlider></HotSlider>
                    </div>

                </div>

                <div className="mx-auto w-[81%] my-24">
                    <h2 className="text-2xl font-bold bg-blue-300 p-3 rounded-lg"> All Other Jobs </h2>

                    <div className='my-16'>
                        <HotSlider></HotSlider>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default SearchJobs;