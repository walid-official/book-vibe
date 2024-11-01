import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import Root from './components/Roots/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/Books/BookDetails.jsx';
import Home from './components/Home/Home.jsx'
import BookList from './components/BookList/BookList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'BookDetail/:BookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('BooksData.json')
      },
      {
        path: 'BookList',
        element: <BookList></BookList>,
        loader: () => fetch('BooksData.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
