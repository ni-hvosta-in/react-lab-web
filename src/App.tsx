import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <StartPage/>
        },
        {
            path: "/main",
            element: <MainPage/>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App


