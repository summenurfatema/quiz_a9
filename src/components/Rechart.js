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

            <LineChart className='w-1/2 md:w-full mt-10'
                width={600}
                height={600}
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