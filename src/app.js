import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.js";
import AboutUs from "./components/AboutUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/Shimmer.js";
import userContext from "./utils/Usercontext.js";

const AppLayout = () => {
  const [user, setuser] = useState({
    name: "Shayaan",
    email: "Shayaanhaque@gmail.com",
  });
  return (
    <>
       <userContext.Provider value={{user:user,
        setuser:setuser
       }}>
        <Header />
        <Outlet />
        <Footer />
       </userContext.Provider>
    </>
  );
};
const Instamart = lazy(() => import("./components/Instamart.js"));
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
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
