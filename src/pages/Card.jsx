import React from 'react';


const Card = ({data}) => {
  console.log(data)
    return (
       <div className="card bg-base-100 w-full p-10 shadow-sm">
  <figure>
    <img
    className=' w-full object-center h-110'
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-3">
    <div className="flex justify-between font-semibold items-center ">
      <p className=' font-semibold text-md  mr-6 btn rounded-4xl  w-1/3 px- py-2 border border-[#09982F20] bg-[#09982F10] text-[#09982F]'>{data.aviable}</p>
      <p className='ml-5 btn rounded-4xl text-md  w-1/3 px- py-2 border border-[#176AE520] bg-[#176AE510] text-[#176AE5]'> Experience {data.experience}</p>
      
    </div>
    <h2 className="card-title text-2xl font-extrabold text-[#0F0F0F] ">{data.name}</h2>
         <h3 className='text-lg font-medium text-[#0F0F0F60] '>{data.education}</h3>
          <p className='border-b border-[#0F0F0F50]'></p>
         <h3 className='text-xl  font-medium text-[#0F0F0F70] '> Reg No: {data.registrationNumber}</h3>
    <div className=" w-full">
       <button className=' px-6 py-3 w-full text-[#176AE5] font-bold text-2xl border border-[#176AE5] rounded-4xl hover:text-[#ffffff] hover:bg-[#176AE5]'>View Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;