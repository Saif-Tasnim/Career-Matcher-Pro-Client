import img1 from '../../../assets/Banner/shutterstock_268688447.jpg';
import img2 from '../../../assets/Banner/recruitment-3942378_640.jpg';
import img3 from '../../../assets/Banner/job-portal-logo-design-template-concept-vector-37017447.jpg';
import { Link } from 'react-router-dom';
import { useGsap } from '../../../hooks/useGsap';
import { useEffect, useRef } from 'react';

const Banner = () => {
    const [tl, ease] = useGsap();

    let h1 = useRef(null);
    let h3 = useRef(null);
    let p = useRef(null);
    let btn = useRef(null);
    let image1 = useRef(null);
    let image2 = useRef(null);
    let image3 = useRef(null);

    useEffect(() => {
        // content style
        tl.from([h1, h3, p, btn], 1, {
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        }, "-=1")

        // image style
        tl.from(image1, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        }, "-=1")
            .from(image1, 2, {
                scale: 1.6,
                ease: ease
            }, "-=1.2");
        tl.from(image2, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        }, "-=1")
            .from(image2, 2, {
                scale: 1.6,
                ease: ease
            }, "-=1");
        tl.from(image3, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        }, "-=1")
            .from(image3, 2, {
                scale: 1.6,
                ease: ease
            }, "-=1");
    })

    return (
        <div className="text-white flex flex-col sm:flex-row  bg-[#242424] py-20">

            <div>
                <h1 className='px-28 pb-4 text-3xl font-bold' ref={el => h1 = el}> Elevate Your Career Journey </h1>

                <h3 className='px-44 pb-6 text-xl font-bold' ref={el => h3 = el}>Explore, Apply, Thrive</h3>

                <p className='w-1/2 pl-20 pt-16' ref={el => p = el}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia iusto eos asperiores voluptates molestias? Eum rerum non a dolore.</p>

                <button className='btn bg-red-500 text-white px-6 py-3 rounded-md mx-32 mt-20' ref={el => btn = el}>
                    <Link to='/login' className='flex gap-3 items-center'
                    > Get Started
                        <svg
                            className="h-6 w-6  rtl:rotate-180"
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


                    </Link> </button>

            </div>


            <div>
                <img src={img1} className='w-[250px] h-[230px] absolute top-24 right-20' alt="" ref={el => image1 = el} />
                <img src={img2} className='w-[250px] h-[250px] absolute top-64 right-96' alt="" ref={el => image2 = el} />
                <img src={img3} className='w-[250px] h-[250px] absolute top-[370px] right-20' alt="" ref={el => image3 = el} />
            </div>
      
           
        </div>
    );
};

export default Banner;