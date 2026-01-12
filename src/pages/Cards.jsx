import React from 'react';
import Card from './Card';

const Cards = () => {
    return(
       <div className="p-10   py-25 px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   ">
           <Card></Card>
       </div>
    )
}
export default Cards;