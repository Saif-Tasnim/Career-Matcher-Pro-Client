/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonorCard = ({ info }) => {

    return (
        <div className="my-6 p-5 border-gray-300 shadow-lg rounded-lg flex justify-between">
            <p> {info.jobPosition} </p>
            <p> {info.companyName} </p>
            <p> {info.experience} </p>
            <button className="px-3 py-2 rounded-lg text-white bg-blue-500">
                <Link to={`/dashboard/donorJobs/${info._id}`}> View Details  </Link> 
                </button>
        </div>
    );
};

export default DonorCard;