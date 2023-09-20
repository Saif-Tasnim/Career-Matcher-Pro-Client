import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SingleJob = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();

    const { data: job = {} } = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donorSingleData/${id}`);
            return res.data;
        }
    })

    console.log(job);

    return (
        <div className="my-28 w-[80%] mx-auto">
            <h1 className="text-center font-bold text-2xl underline">
                {job.jobPosition}   </h1>

            <h3 className="text-center font-bold text-xl my-6">
                {job.companyName} </h3>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> About Company </h1>
                <p>{job?.companyDescription}</p>
            </div>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> Job Description </h1>
                <p>{job?.jobDescription}</p>
            </div>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> Key Responsibility </h1>
                <p>{job?.responsibility}</p>
            </div>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> Required Skills </h1>
                <div className="flex gap-10">
                    {
                        job?.skill?.map(sk => <div className="border-2 border-purple-600 px-2 py-1 bg-indigo-700 text-white rounded-lg" key={sk.value}> {sk.label} </div>)
                    }
                </div>
            </div>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> All Fundamentals </h1>
                <p className="my-3"> Job Type : {job?.jobType?.label} </p>
                <p className="my-3">Salary : {job.salary} </p>
                <p className="my-3"> Experience Required : {job.experience} </p>
                <p className="my-3"> Office Location : {job.location} </p>
            </div>

            <div className="my-14">
                <h1 className="font-bold underline mb-6"> Recruiter Information </h1>
                <p className="my-3"> Recruiter Name: {job?.name} </p>
                <p className="my-3"> Recruiter Email: {job?.email} </p>
                <p className="my-3"> Recruiter Position : {job.donorPosition} </p>
            </div>



        </div>
    );
};

export default SingleJob;