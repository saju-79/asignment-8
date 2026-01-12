import React from 'react';
import { NavLink } from 'react-router';
import Button from '../bottn/Button';
 
    

const Navber = () => {
       const links = <>
    
      <li><NavLink className={ ({isActive}) =>isActive? " bg-gray-300  border-b-4 border-[#176AE5] font-bold text-sm mx-2" :" font-bold text-sm mx-2" }  to="/">Home</NavLink></li>
      <li><NavLink className={ ({isActive}) =>isActive? " bg-gray-300  border-b-4 border-[#176AE5] font-bold text-sm mx-2" :" font-bold text-sm mx-2" }  to="/my-bookings">My-Bookings</NavLink></li>
      <li><NavLink className={ ({isActive}) =>isActive? " bg-gray-300  border-b-4 border-[#176AE5] font-bold text-sm mx-2" :" font-bold text-sm mx-2" }  to="/blogs">Blogs</NavLink></li>
      <li><NavLink className={ ({isActive}) =>isActive? " bg-gray-300  border-b-4 border-[#176AE5] font-bold text-sm mx-2" :" font-bold text-sm mx-2" }  to="/contact">Contact Us</NavLink></li>
 
     
    </>
       
    return (
          <div className="navbar flex justify-around min-h-5 mx-auto  w-11/12 wx-auto   p-4 items-center bg-gray-100 rounded-sm py-2">
  <div className="navbar-start rounded-sm py-2 flex ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-gray-100 rounded-box z-1 mt-3 w-52 p-2  ">
      {links}
      </ul>
    </div>
   <div className="flex gap-1 items-center">
    <img className='w-6'  src="/public/C001-assets/logo.png" alt="" />
    <h2 className='text-[#0F0F0F] font-extrabold text-xl'>Phudu</h2>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
       
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <Button text="Emergency"></Button>
  </div>
</div>
    );
};

export default Navber;