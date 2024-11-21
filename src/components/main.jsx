import App from './App.jsx'
import Bookdetails from './Bookdetails.jsx'
import Genre from './Genre.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }, {
        path: '/:book',
        element: <Bookdetails/>
    }, {
        path: '/:genre',
        element: <Genre/>
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
