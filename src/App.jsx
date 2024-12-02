import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Ecommerce/Components/Layout";
import Home from "./Ecommerce/Components/Home";
import Products from "./Ecommerce/Products/Products";
import Cart from "./Ecommerce/Context/Cart";

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
                    path: "/products:id",
                    element: <DetailsProduct />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }

            ]
        }

    ]);
    return <RouterProvider router={AppRouter} />
}
export default App;
