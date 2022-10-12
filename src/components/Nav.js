
import { Link } from 'react-router-dom';






const Nav = () => {
    return (
        <div className='container mx-auto flex justify-evenly items-center border-b-2 md:px-10 py-7 border-blue-600'>
            <div>
                <h1 className='text-5xl font-bold'>Quizee</h1>
            </div>

            <nav className='text-blue-600 flex flex-col md:flex-row space-x-1 md:space-x-10 text-2xl font-semibold'>
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/statics'>Statics</Link>
            </nav>

        </div>
    );
};

export default Nav;