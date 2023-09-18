import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/Entry/download.png';
import { useForm } from "react-hook-form";
import { Fade, Slide } from "react-awesome-reveal";
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import ProgresBar from '../../../components/common/ProgresBar/ProgresBar';

const LogIn = () => {

    const { user, login, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {

        if (data.email === user?.email) {
            if (user.emailVerified === false) {
                return toast.error("You have not verified your email");
            }
        }

        login(data.email, data.password)
            .then((res) => {
                toast.success(`Welcome to you ${res.user?.displayName} in career matcher pro`);
                navigate('/dashboard/dashboard')
            })



    }

    if (loading) {
        return <ProgresBar></ProgresBar>
    }

    return (

        <div className='flex justify-center items-center'>

            <Slide>
                <div className="w-[85%] border-2 border-l-gray-500 border-t-purple-500 border-r-indigo-500 border-b-blue-500 bg-[#242424] mt-20 p-7 rounded-md">
                    <img src={img} alt="" className='w-40 rounded-lg' />

                    <Fade delay={1e3} cascade damping={1e-1}>
                        <h1 className='my-8 text-3xl font-bold text-white'> Log In </h1>

                        <p className='text-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error iste expedita!</p>
                    </Fade>
                </div>

            </Slide>


            <div className='border-2 border-slate-50 shadow-md p-7 mt-20 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex flex-col gap-y-3 my-5'>
                        <label htmlFor=""> Your Email </label>
                        <input type="email" {...register("email", { required: true })} className='bg-gray-50 p-2 rounded-lg' placeholder='Email' />
                        {errors.email?.type === 'required' && <p role="alert" className='text-red-400'> Email is required </p>}
                    </div>

                    <div className='flex flex-col gap-y-3 my-5'>
                        <label htmlFor=""> Your Password </label>
                        <input type="password" {...register("password", { required: true })} className='bg-gray-50 p-2 rounded-lg w-[360px]' placeholder='Password' />
                        {errors.password?.type === 'required' && <p role="alert" className='text-red-400'> Password is required </p>}
                    </div>

                    <div className='text-center'>
                        <button type='submit' className='bg-indigo-700 my-5 px-5 py-2 text-white rounded-lg'>Log In</button>
                    </div>

                </form>

                <div className='my-4'>
                    New To Our Site ? Wanna Go To <Link to="/signup" className='px-1 font-bold text-blue-500'> Sign Up </Link> ?
                </div>
            </div>

        </div>
    );
};

export default LogIn;