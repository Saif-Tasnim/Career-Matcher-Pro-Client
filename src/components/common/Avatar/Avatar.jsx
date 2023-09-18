import { useContext } from 'react';
import img from '../../../assets/Avatar/1000_F_120306692_GRob589AStFRJJEIvbH8pUhT5TnfweI3.jpg';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <img src={user?.photoURL || img} className='w-8 rounded-2xl' alt="" />
        </div>
    );
};

export default Avatar;