import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>


            <div className='flex flex-col-reverse md:flex-row md:justify-around mt-28'>
                {/* right */}
                <div className='w-[400px] space-y-7 text-left md:text-center text-gray-800'>
                    <h1 className='text-5xl font-semibold'>Welcome to <span className='text-5xl font-bold'>Quizee</span></h1>
                    <p className='text-2xl font-semibold'>Looking a best website for quiz? We are providing best quizes for you that help you to increase your knowledge.</p>
                    <Link to='/home'>
                        <button className='text-4xl font-semibold bg-yellow-700 py-3  px-5 rounded-2xl mt-5'>Start</button>
                    </Link>

                </div>


                {/* left */}
                <div>
                    <img className='w-1/2 md:w-full' src='https://img.freepik.com/free-vector/web-questions-help-support-page-design_1017-26766.jpg?w=360&t=st=1665566039~exp=1665566639~hmac=4cfbe6316ca39ee75505fb08969ab35f0c3566e65ac076600a9fb1ba14de21e1' alt='banner' />
                </div>

            </div>


        </div>
    );
};

export default Main;