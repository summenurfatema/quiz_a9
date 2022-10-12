import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import Option from './Option';

const Options = () => {
    const quizes = useLoaderData();
    return (
        <div className='container mx-auto'>
            <Nav></Nav>
            {
                quizes.data.questions.map(optn => <Option
                    key={optn.id}
                    optn={optn}
                ></Option>)
            }



        </div>
    );
};

export default Options;