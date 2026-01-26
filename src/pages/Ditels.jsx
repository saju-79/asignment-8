import React from 'react';
import { CiAlarmOn } from 'react-icons/ci';
import { Link, useLoaderData, useParams } from 'react-router';

const Ditels = () => {
    const { id } = useParams();
    const data = useLoaderData();


    const singleDoctor = data.find(doctor => doctor.id === parseInt(id));
    const { name,
        specialization,
        experience,
        speciality,
        price,
        Availability,
        consultationFee,
        image,
        education,
        registrationNumber,
        
    } = singleDoctor
    return (
        <div>

            <div className=" text-center flex justify-center flex-col items-center space-y-4 my-10 bg-gray-100 p-10 rounded-lg">
                <h1 className='text-4xl font-extrabold text-[#0F0F0F]'>Doctor’s Profile Details</h1>
                <p className='text-lg  font-bold text-[#0F0F0F] '>    Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            {/* Doctor Profile Details */}
            <div className="  space-y-4  bg-gray-100  rounded-lg">

                <section className="dark:bg-gray-100 dark:text-gray-800 rounded-lg">
                    <div className="container flex gap-3  ">
                        <div className="flex gap-5 items-center  w-3/5  p-6   ">
                            <img src={image} alt="" className=" rounded-sm w-full object-cover     sm:h-96 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                        <div className="flex w-2/5 flex-col space-y-6 p-6 rounded-sm justify-start py-10 ">
                            <h3 className='text-4xl font-bold  text-[#0F0F0F] '> {name}</h3>
                            <h3 className='text-2xl font-semibold  text-[#0F0F0F40] '>{education}</h3>
                            <h3 className='text-xl font-semibold  text-[#0F0F0F20] '> {specialization}</h3>
                            <h3 className='text-xl font-semibold  text-[#0F0F0F40] '> {experience} years</h3>
                            <h3 className='text-2xl font-semibold  text-[#0F0F0F] '> {speciality}</h3>
                            <h3 className='text-2xl font-semibold  text-[#0F0F0F60] '> Registration No: {registrationNumber}</h3>

                            <div className="flex gap-3 ">
                                <h3 className='text-xl font-bold  text-[#0F0F0F] '> Available:</h3>
                                <p className='text-lg font-medium text-[#FFA000]  '>{Availability}</p>
                            </div>
                            <div className=" gap-2 ">
                                <span className='text-md font-bold  text-[#0F0F0F] '>  Consultation Free: </span>
                                <span className='text-md font-bold text-[#176AE5]  '>free:{price}TK {consultationFee}</span>
                                <span className='text-md font-medium text-[#0F0F0F40] '>incl.Vat</span>
                                <span className='text-md font-medium text-[#176AE5] '> Rer consultation </span>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            {/* Booking Section */}
            <div className="  space-y-4 my-10 bg-gray-100 p-10 rounded-lg">
                <div className=" flex justify-between  items-center">
                    <h2 className='text-lg font-bold text-[#0F0F0F] '>Availability</h2>
                    <p className=' font-semibold text-md  mr-6 btn rounded-4xl  px-6 py-2 border border-[#09982F20] bg-[#09982F10] text-[#09982F]'> Doctor Available Today </p>
                </div>
                {/* comment section    */}
                <div className=""> 
                    <p className='flex gap-2 items-center px-4 py-2 bg-[#FFA00010] rounded-sm text-[#FFA000] font-medium text-md '> <CiAlarmOn size={22} /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>
                {/* button */}
                <Link to={`/DoctorChart/${id} `}>
                    <button className="relative w-full font-bold  text-xl text-center justify-center my-6 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block text-center items-center justify-center w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute text-center  right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                        </span>
                        <span className="relative">Book Appointment Now</span>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Ditels;