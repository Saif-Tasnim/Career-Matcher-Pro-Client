/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DonorCard from "../../components/User/Donor/DonorCard";
// import ProgresBar from "../../components/common/ProgresBar/ProgresBar";

const DonorJobs = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [userInfo, setUserInfo] = useState([]);

    // const { data: userInfo = [], isLoading } = useQuery({
    //     queryKey: ['userInfo'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/postJobs/${user?.email}`)
    //         return res.data;
    //     }
    // })

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosSecure.get(`/postJobs/${user?.email}`);
            const data = res.data
            setUserInfo(data);
        }
        fetchData();
    }, [userInfo])

    // console.log(userInfo);

    // if (isLoading) {
    //     return <ProgresBar></ProgresBar>
    // }


    return (
        <div className="my-28 w-[80%] mx-auto">
            <h1 className="text-xl font-bold underline text-center"> Your Jobs Post List </h1>

            {
                userInfo.map(info => <DonorCard key={info._id} info={info}
                ></DonorCard>)
            }
        </div>
    );
};

export default DonorJobs;