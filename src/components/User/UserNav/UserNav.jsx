/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ProgresBar from '../../common/ProgresBar/ProgresBar';
import DropDown from '../../common/DropDown/DropDown';
import { Link } from 'react-router-dom';

const UserNav = () => {
    const { user, loading } = useContext(AuthContext);

    const firstName = user?.displayName;

    if (loading) {
        return <ProgresBar></ProgresBar>
    }

    return (
        <div className='bg-[#242424] text-white py-6'>

            <div className='max-w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <h1>Welcome , {firstName}</h1>
                </div>
                
                <div className='flex items-center gap-6 list-none'>
                    <li><Link to='/dashboard/dashboard'> Dashboard </Link> </li>
                    <li><Link to='/dashboard/dashboard'> Applied Jobs </Link> </li>
                    <li><Link to='/dashboard/dashboard'> Take Job Preparations </Link> </li>
                </div>
                <div>
                    <DropDown></DropDown>
                </div>
            </div>

        </div>
    );
};

export default UserNav;