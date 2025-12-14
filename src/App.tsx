import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {StartPage} from './pages/StartPage/StartPage';
import {MainPage} from './pages/MainPage/MainPage';
import { TestPage } from './pages/TestPage';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <StartPage/>
        },
        {
            path: "/main",
            element: <MainPage/>
        },
        {
            path: "/test",
            element: <TestPage/>
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
            <Toaster position="top-right" />
        </>
    );
}

export default App


