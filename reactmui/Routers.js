import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from './Navbar.js';
import WebPage from './WebPage';
import Links from "./Links.js";

function Routers(){
    const router = createBrowserRouter([
        {
            path: "/home",
            element: <Links/>,
        },
        {
            //path name should be same as href prop
            path: "Webpage",
            //element is the page to be displayed
            element: <WebPage />,
        },
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Routers;