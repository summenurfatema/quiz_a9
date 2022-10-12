import React from 'react';




const Option = ({ optn }) => {

    function check(e) {

        if (e.target.innerText === optn.correctAnswer) {
            alert('right')
        }
        else {
            alert('wrong')
        }
    }
    return (
        <div className='container mx-auto bg-gray-300 border-4 border-gray-300 space-y-4 my-4 py-4'>

            <div className='flex justify-center items-center'>
                <p>i</p>
                <h1 className='text-3xl font-semibold'>{optn.question.slice(3, -4)}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 float-right  ml-5">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                </svg>

            </div>



            {

                optn.options.map(op =>
                    <ul key={op.id} className='list-none flex flex-col items-center ' >

                        <li key={op.id} onClick={check} className="bg-white w-96 md:w-[700px] text-xl font-semibold py-4 cursor-pointer">{op}</li>
                    </ul>
                )
            }


        </div>
    );
};

export default Option;