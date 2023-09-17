import { Link } from 'react-router-dom';
import img from '../../../assets/Entry/download (1).png';
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (

        <div className='flex justify-center items-center gap-12 flex-row-reverse'>

            <div className="w-1/3 border-2 border-l-gray-500 border-t-purple-500 border-r-indigo-500 border-b-blue-500 bg-[#242424] mt-20 p-7 rounded-md">
                <img src={img} alt="" className='w-40 rounded-lg' />

                <h1 className='my-8 text-3xl font-bold text-white'> SignUp </h1>

                <p className='text-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error iste expedita!</p>
            </div>

            <div className='border-2 border-slate-50 shadow-md p-7 mt-20 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-y-3 my-5'>
                            <label htmlFor=""> First Name </label>
                            <input type="text" {...register("fname", { required: true })} className='bg-gray-50 p-2 rounded-lg' placeholder='First Name' />
                            {errors.fname?.type === 'required' && <p role="alert" className='text-red-400'> First Name is required </p>}
                        </div>

                        <div className='flex flex-col gap-y-3 my-5'>
                            <label htmlFor=""> Last Name </label>
                            <input type="text" {...register("lname", { required: true })} className='bg-gray-50 p-2 rounded-lg w-[360px]' placeholder='Last Name' />
                            {errors.lname?.type === 'required' && <p role="alert" className='text-red-400'> Last Name is required </p>}
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-y-3 my-5'>
                            <label htmlFor=""> Email </label>
                            <input type="email" {...register("email", { required: true })} className='bg-gray-50 p-2 rounded-lg' placeholder='Email' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-red-400'> Email is required </p>}
                        </div>

                        <div className='flex flex-col gap-y-3 my-5'>
                            <label htmlFor=""> Password </label>
                            <input type="password" {...register("password", { required: true })} className='bg-gray-50 p-2 rounded-lg w-[360px]' placeholder='Password' />
                            {errors.password?.type === 'required' && <p role="alert" className='text-red-400'> Password is required </p>}
                        </div>
                    </div>

                    <div className='my-8'>
                        <label htmlFor="" className='mr-6 font-bold'> Account Type </label>
                        <span className='mx-6'><input type="radio" id="" value="seeker" {...register("type", { required: true })} /> Job Seeker</span>
                        <span className='mx-6'><input type="radio" {...register("type", { required: true })} id="" value="donor" /> Job Recruiters</span>
                        {errors.type?.type === 'required' && <p role="alert" className='text-red-400 my-3'> Account Type is required </p>}

                    </div>

                    <div className='text-center'>
                        <button type='submit' className='bg-indigo-700 my-3 px-5 py-2 text-white rounded-lg'> Sign Up </button>
                    </div>

                </form>

                <div className='my-2'>
                    Owns An Account ? Then Go To <Link to="/login" className='px-1 font-bold text-blue-500'> Log In </Link>
                </div>
            </div>

        </div>
    );
};

export default Register;