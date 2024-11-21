import App from './App.jsx'
import Genre from './Genre.jsx'
import Bookdetails from './Bookdetails.jsx'
import BrowsePage from './BrowsePage.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bookmark from './Bookmark.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <BrowsePage/>
            }, {
                path: '/:book',
                element: <Bookdetails/>
            }, {
                path: '/genre/:cate',
                element: <Genre/>
            }, {
                path: '/Bookmark',
                element: <Bookmark/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
