import React from 'react';
import { Link } from 'react-router-dom';






const Cards = ({ card }) => {
    console.log(card)

    const { id, name, logo, total } = card
    return (

        <div className='border-4 border-gray-100 rounded-2xl shadow-2xl  p-3 space-y-4'>
            <img className='bg-gray-500 w-full' src={logo} alt='img' />

            <div className='flex justify-evenly items-center space-x-1 md:space-x-3 '>
                <p className='text-2xl font-semibold'>{name}</p>
                <p className='text-2xl font-semibold'>Quiz: {total}</p>
                <Link to={`/quiz/${id}`}>
                    <button className='text-2xl font-semibold bg-yellow-700 py-2 px-3 rounded-xl'>Start<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block ml-1">
                        <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg></button>
                </Link>


            </div>

        </div>



    );
};

export default Cards;