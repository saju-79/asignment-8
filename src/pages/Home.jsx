import React from 'react';
import Heroo from '../componet/Heroo';
import Cards from './Cards';
 

const Home = () => {
    return (
        <div>
            <Heroo></Heroo>
             <div className=" text-center flex justify-center flex-col items-center space-y-4 my-16 ">
                 <h1 className='text-4xl font-extrabold text-[#0F0F0F]'>Our Best Doctors</h1>
           <p className='text-lg  font-bold text-[#0F0F0F] '> Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
             </div>
             <div className="  P-10 rounded-sm  ">
                <Cards></Cards>
             </div>
        </div>
    );
};

export default Home;