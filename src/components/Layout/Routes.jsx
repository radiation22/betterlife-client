import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Main from "./Main";
import Privacy from "../Privacy/Privacy";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Blog/Details";
import AddBlog from "../Blog/AddBlog";
import BlogHome from "../Blog/BlogHome";
import Details from "../Blog/Details";
import About from "../About/About";
import Individual from "../Treatment/Individual/Individual";
import Others from "../Treatment/Others/Others";
import Baby from "../Treatment/Baby/Baby";
import Partner from "../Treatment/Partner/Partner";
import Faq from "../Faq/Faq";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Counsil from "../Counseling/Counsil";
import Callpage from "../CallPage/Callpage";
import CallSubmit from "../CallPage/CallSubmit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/blog",
        element: <BlogHome></BlogHome>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/individual",
        element: (
          <PrivateRoute>
            <Individual></Individual>
          </PrivateRoute>
        ),
      },
      {
        path: "/callPage",
        element: (
          <PrivateRoute>
            <Callpage></Callpage>
          </PrivateRoute>
        ),
      },
      {
        path: "/callSubmit",
        element: (
          <PrivateRoute>
            <CallSubmit></CallSubmit>
          </PrivateRoute>
        ),
      },
      {
        path: "/exhibition",
        element: (
          <PrivateRoute>
            <Counsil></Counsil>
          </PrivateRoute>
        ),
      },
      {
        path: "/others",
        element: (
          <PrivateRoute>
            <Others></Others>
          </PrivateRoute>
        ),
      },
      {
        path: "/baby",
        element: (
          <PrivateRoute>
            <Baby></Baby>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/partner",
        element: (
          <PrivateRoute>
            <Partner></Partner>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
    ],
  },
]);
