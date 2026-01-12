import React from 'react';
import Heroo from '../componet/Heroo';
import Cards from './Cards';
import { useLoaderData } from 'react-router';
import Card from './Card';
 

 

const Home = () => {
    const datas = useLoaderData();
    
      
    return (
        <div>
            <Heroo></Heroo>
             <div className=" text-center flex justify-center flex-col items-center space-y-4 my-16 ">
                 <h1 className='text-4xl font-extrabold text-[#0F0F0F]'>Our Best Doctors</h1>
           <p className='text-lg  font-bold text-[#0F0F0F] '> Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
             </div>
             <div className=" mt-10  P-10 rounded-sm grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
              {
                datas.map(data=> <Card data={data}></Card>)
              }
             </div>
        </div>
    );
};

export default Home;