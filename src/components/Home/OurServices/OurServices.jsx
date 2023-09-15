import Card from "./Card/Card";
import img1 from '../../../assets/Services/search.jpeg'
import img2 from '../../../assets/Services/various-jobs.png'
import img3 from '../../../assets/Services/jobs-oop.jpeg'
import img4 from '../../../assets/Services/job-type.png'


const OurServices = () => {
    return (
        <div className="my-20">
            <h1 className="text-center font-semibold text-xl"> What We Provides </h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 my-16 w-[97%] mx-auto">
                <div className="rounded-lg bg-gray-100">
                    <Card image={img1} title="Searching Job">

                    </Card>
                </div>
                <div className="rounded-lg bg-gray-100">
                    <Card image={img2} title="Land Of Jobs"></Card>
                </div>
                <div className="rounded-lg bg-gray-100">
                    <Card image={img3} title="Create Opportunities"></Card>
                </div>
                <div className="rounded-lg bg-gray-100">
                    <Card image={img4} title="OffSite / Onsite Jobs"></Card>
                </div>
            </div>
        </div>
    );
};

export default OurServices;