
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';

import Main from './components/Main';
import Rechart from './components/Rechart';
import Error from './components/Error';
import Options from './components/Options';




function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>,


    },
    {
      path: 'home',
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Home></Home>
    },
    {
      path: "/quiz/:quizId",
      loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element: <Options></Options>
    },
    { path: 'blog', element: <Blog></Blog> },
    { path: 'statics', element: <Rechart></Rechart> },
    { path: '*', element: <Error></Error> }
  ])


  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>

    </div>
  );

}
export default App;
