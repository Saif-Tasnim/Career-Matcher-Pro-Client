import img from "../../../assets/About/online_job_seach_portal_features.jpg";
import logo from '../../../assets/About/check-mark.png';
import { useAOS } from "../../../hooks/useAOS";

const AboutUs = () => {
    
    useAOS();

    return (
        <div className="my-20 p-7">
            <h1 className="text-center text-xl font-semibold mb-8" data-aos="flip-left"> About Us </h1>

            <div className="flex gap-12 my-16 p-7 w-3/4 mx-auto shadow-gray-300 shadow-md rounded-lg" data-aos="fade-left">

                <div className="flex items-center ">
                    <img src={img} className="w-fit rounded-lg" alt="" />
                </div>

                <div className="w-3/4 my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita officiis pariatur dolorem nostrum temporibus tenetur rerum ex odit ullam? Deserunt iusto a eum! Eligendi vero beatae provident..

                    <ul className="my-6">
                        <li className="flex gap-6"><img src={logo} className="w-6" alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span> </li>
                        <li className="flex gap-6"><img src={logo} className="w-6" alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span> </li>
                        <li className="flex gap-6"><img src={logo} className="w-6" alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span> </li>
                        <li className="flex gap-6"><img src={logo} className="w-6" alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span> </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;