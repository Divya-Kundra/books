import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookId from "./pages/BookId";
import VillainId from "./pages/VillainId"
import ShortId from "./pages/ShortId";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "books/:bookId",
    element: <BookId />,
  },
  {
    path: "shorts/:shortId",
    element: <ShortId />,
  },
  {
    path: "villains/:villainId",
    element: <VillainId />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
