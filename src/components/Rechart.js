import React from 'react';
import Nav from './Nav';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    const data = [
        {
            name: 'React',
            Quiz: 8,
        },
        {
            name: 'JavaScript',
            Quiz: 9,

        },
        {
            name: 'CSS',
            Quiz: 8,

        },
        {
            name: 'Git',
            Quiz: 11,

        }]


    return (
        <div className='container mx-auto flex flex-col items-center'>
            <Nav></Nav>
            <h1 className='text-4xl font-semibold text-gray-800 mt-5 border-b-2 border-gray-300 pb-5'>Chart of Total Quiz</h1>
            <LineChart className='w-1/2 md:w-full mt-10'
                width={600}
                height={400}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Quiz" stroke="#82ca9d" />
            </LineChart>


        </div >
    );
};


export default Rechart;