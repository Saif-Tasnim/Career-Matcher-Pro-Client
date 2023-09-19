/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ProgresBar from '../../common/ProgresBar/ProgresBar';
import DropDown from '../../common/DropDown/DropDown';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const UserNav = () => {
    const { user, loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();

    const firstName = user?.displayName;

    const { data: userData = {} } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userType/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })


    if (loading) {
        return <ProgresBar></ProgresBar>
    }

    return (
        <div className='bg-[#242424] text-white py-6'>

            <div className='max-w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <h1>Welcome , {firstName}</h1>
                </div>

                {userData?.type === "seeker" ?
                    <div className='flex items-center gap-6 list-none'>
                        <li><Link to='/dashboard/dashboard'> Dashboard </Link> </li>
                        <li><Link to='/dashboard/dashboard'> Applied Jobs </Link> </li>
                        <li><Link to='/dashboard/dashboard'> Take Job Preparations </Link> </li>
                    </div>

                    :

                    <div className='flex items-center gap-6 list-none'>
                        <li><Link to='/dashboard/dashboard'> Dashboard </Link> </li>
                        <li><Link to='/dashboard/postJob'> Post A Job </Link> </li>
                        <li><Link to='/dashboard/dashboard'> See Your Post </Link> </li>
                    </div>

                }

                <div>
                    <DropDown></DropDown>
                </div>
            </div>

        </div>
    );
};

export default UserNav;