import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

import Nav from './Nav';


const Home = () => {
    const cards = useLoaderData()


    return (
        <div>
            <Nav></Nav>
            <div className='flex flex-col md:flex-col'>
                <div className='flex flex-col items-center'>
                    <img className='container mx-auto w-60' src='https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=360&t=st=1665570355~exp=1665570955~hmac=73db343e5856983c95baa01334bf62da06ede4548d46aa73038faa9264bb55e8' alt='home' />
                    <h1 className=' w-[300px] text-4xl font-bold text-red-700  border-b-2 border-red-200 pb-6'>Select Your Favourite Category</h1>

                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 p-10 items-center'>
                    {
                        cards.data.map(card => <Cards
                            key={card.id}
                            card={card}
                        ></Cards>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Home;