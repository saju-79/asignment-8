import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";
import Error from "../componet/Error";
import MyBooks from "../pages/MyBooks";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Ditels from "../pages/Ditels";


export const router = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            loader: () => fetch('/data.json'),
            Component: Home
         },
         {
            path: "/my-bookings",
            Component: MyBooks
         },
         {
            path: "/blogs",
            Component: Blogs
         },
         {
            path: "/contact",
            Component: Contact
         },
         {
            path: "ditels/:id",
            loader: () => fetch('/data.json'),
            Component: Ditels,
         }


      ]
   },

])