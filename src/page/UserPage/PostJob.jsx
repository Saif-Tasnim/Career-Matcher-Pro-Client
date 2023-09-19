import { useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";

const PostJob = () => {

    const animatedComponents = makeAnimated();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const options = [
        { value: 'C', label: 'C' },
        { value: 'C++', label: 'C++' },
        { value: 'C#', label: 'C#' },
        { value: 'Java', label: 'Java' },
        { value: 'Python', label: 'Python' },
        { value: 'Ruby', label: 'Ruby' },
        { value: 'Javascript', label: 'Javascript' },
        { value: 'React', label: 'React' },
        { value: 'Angular Js', label: 'Angular Js' },
        { value: 'React Native', label: 'React Native' },
        { value: 'Kotlin', label: 'Kotlin' },
        { value: 'Php', label: 'Php' },
        { value: 'Laravel', label: 'Laravel' },
        { value: 'Node Js', label: 'Node Js' },
        { value: 'Express Js', label: 'Express Js' },
        { value: 'MySQL', label: 'MySQL' },
        { value: 'PostGreSql', label: 'PostGreSql' },
        { value: 'MongoDb', label: 'MongoDb' },
        { value: 'GraphQL', label: 'GraphQL' },
    ]

    const jobType = [
        { value: "remote", label: "Work From Home" },
        { value: "onsite", label: "Full Time Office" },
        { value: "hybrid", label: "Hybrid" },
    ]


    return (
        <div className="my-16 w-[80%] mx-auto">
            <h1 className="text-center text-xl font-bold"> Create A Job Opportunity </h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* job opportunity */}
                <div className="my-8">
                    <h3 className="text-xl underline"> Job Description  : </h3>

                    <div className="mt-8 mb-3 ">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Position </label>
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="Junior Full Stack Developer"
                                className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                {...register("jobPosition", { required: true })}
                            />
                        </div>
                        {errors.jobPosition?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Position is required </p>}
                    </div>

                    <div className="mt-8 mb-3 ">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Experience </label>
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="0 to 1 years"
                                className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                {...register("experience", { required: true })}
                            />
                        </div>
                        {errors.experience?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Experience is required </p>}

                    </div>

                    <div className="mt-8 mb-3">
                        <div className=' flex gap-12'>
                            <label htmlFor="" className="pt-2"> Required Skills </label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                                className='w-1/2'
                                // {...register("skill", { required: true })}
                            ></Select>
                        </div>
                        {/* {errors.skill?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Skill is required </p>} */}

                    </div>

                    <div className="mt-8 mb-3 ">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Job Type </label>
                            <Select className='w-1/2'
                                options={jobType}
                                // {...register("jobType", { required: true })}
                            >

                            </Select>
                        </div>
                        {/* {errors.jobType?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Job Type is required </p>} */}

                    </div>

                    <div className="mt-8 mb-5 ">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Job Description </label>
                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-1/2 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm resize-none overflow-y-scroll p-2"
                                rows="8"
                                {...register("jobDescription", { required: true })}
                                placeholder="Provide the Job Description Elaborately"
                            ></textarea>
                        </div>
                        {errors.jobDescription?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Job Description is required </p>}
                    </div>

                    <div className="mt-8 mb-5 ">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Key Responsibility </label>
                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-1/2 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm resize-none overflow-y-scroll p-2"
                                rows="8"
                                {...register("responsibility", { required: true })}
                                placeholder="Provide the actual responsibility to have a employee"
                            ></textarea>
                        </div>
                        {errors.companyName?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Key Responsibility is required </p>}
                    </div>

                </div>

                {/* company details */}
                <div className="my-16">
                    <h3 className="text-xl underline"> Company Details  : </h3>

                    <div className="mt-8 mb-3">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Company Name </label>
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="Company Name"
                                className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                {...register("companyName", { required: true })}
                            />
                        </div>

                        {errors.companyName?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Company Name is required </p>}

                    </div>

                    <div className="mt-8 mb-3">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Company Location </label>
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="Company Location"
                                className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                {...register("location", { required: true })}
                            />
                        </div>

                        {errors.companyName?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Company Location is required </p>}

                    </div>
                    <div className="mt-8 mb-3">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> About Company </label>
                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-1/2 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm resize-none overflow-y-scroll p-2"
                                rows="8"
                                placeholder="Provide the information of company"
                                {...register("companyDescription", { required: true })}
                            ></textarea>
                        </div>

                        {errors.companyName?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-44'> Company Location is required </p>}
                    </div>
                </div>

                {/* recruiter information */}
                <div className="my-16">
                    <h3 className="text-xl underline"> Recruiter Information </h3>

                    <div className="mt-8 mb-3 flex gap-12">
                        <label htmlFor="" className="pt-2"> Name </label>
                        <input
                            type="text"
                            id="UserEmail"
                            defaultValue={user?.displayName}
                            readOnly
                            className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                            {...register("name")}
                        />

                    </div>

                    <div className="mt-8 mb-3 flex gap-12">
                        <label htmlFor="" className="pt-2"> Email </label>
                        <input
                            type="email"
                            id="UserEmail"
                            defaultValue={user?.email}
                            readOnly
                            className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                            {...register("email")}
                        />

                    </div>
                    <div className="mt-8 mb-3">
                        <div className='flex gap-12'>
                            <label htmlFor="" className="pt-2"> Position in Company </label>
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder='Your current position'
                                className="w-3/4 rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                {...register("donorPosition", { required: true })}
                            />
                        </div>
                        {errors.donorPosition?.type === 'required' && <p role="alert" className='text-red-400 mt-5 ml-52'> Position is required </p>}
                    </div>
                </div>

                {/* buttons */}
                <div className='flex justify-end gap-6 mr-10'>
                    <input type="submit" value="Post This Job" className='px-5 py-3 bg-lime-600 rounded-lg text-white hover:cursor-pointer mr-8' />

                    <input type="reset" value="Clear" className='px-5 py-3 bg-rose-600 rounded-lg text-white hover:cursor-pointer' />
                </div>

            </form>

        </div>
    );
};

export default PostJob;