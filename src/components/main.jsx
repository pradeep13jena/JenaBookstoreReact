import App from './App.jsx'
import Bookdetails from './Bookdetails.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }, {
        path: '/:book',
        element: <Bookdetails/>
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
