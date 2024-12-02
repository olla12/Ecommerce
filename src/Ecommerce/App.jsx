import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Products from "./Products/Products";
import Cart from "./Context/Cart";
import DetailsProduct from "./Products/DetailsProduct";

function App() {
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/products/:id",
                    element: <DetailsProduct />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                

            ]
        }

    ]);
    return <RouterProvider router={AppRouter} />
}
export default App;
