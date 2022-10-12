import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container mx-auto mt-10 flex flex-col justify-center items-center'>
            <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=360&t=st=1665573127~exp=1665573727~hmac=aec3bed773bbe0aefc694e463784ab5c5e676d0b49de12db826a2b5c8481dbe0' alt='error' />

            <Link to='/'>
                <button className='text-4xl font-semibold bg-yellow-700 py-3 px-6 rounded-3xl mt-5'>Go Back</button>
            </Link>
        </div>
    );
};

export default Error;