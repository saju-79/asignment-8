import React from 'react';
import Button from '../bottn/Button';
// import Button from '../bottn/Button';
 

const Heroo = () => {
    return (
        <div className=' flex flex-col items-center text-center py-20 px-15   my-4 border border-gray-200  space-y-4 bg-gray-100 rounded-lg'>
           <h1 className='text-4xl font-extrabold text-[#0F0F0F]'>Dependable Care, Backed by Trusted  <br /> Professionals.</h1>
           <p className='text-lg  font-bold text-[#0F0F0F] '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           <form  className='flex flex-col md:flex-row w-2/3 mx-auto items-center  '>
            <input  className='mb-2 font-medium md:m-2 w-2/3 mx-auto h-10 border border-gray-300 focus:outline-none focus:shadow-outline rounded-4xl px-6 py-6' placeholder='Search any doctor...'  type="text" />
         <Button text="Search"></Button>
                
           </form>
           <div className="flex gap-5">
            <img  className='w-1/2' src="https://i.ibb.co.com/RT3YNhR6/banner-img-1.png" alt="" />
            <img className='w-1/2 rounded-3xl' src="https://i.ibb.co.com/yBKPswLD/premium-photo-1681967018806-2bd5c0cb96bf.avif" alt="" />
           </div>
        </div>
    );  
};

export default Heroo;