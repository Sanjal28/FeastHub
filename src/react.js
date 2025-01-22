import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Shimmer from "./components/shimmer";
import { UserContext } from "./components/UserContext";
import { useState, useEffect } from "react";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/cart"; 
// import Grocery from "./components/Grocery";

// lazy loading and Suspense(component)

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
  // context value is over written using provider
  <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: "Sanjal" }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid",
        // dynamic routing
        element: <Restaurants />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
