import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MainHome from "../pages/Main/Home/MainHome";
import Login from "../pages/Login/Login";
import SIgnup from "../pages/Signup/SIgnup";
import AllServices from "../pages/AllServices/AllServices";
import SingleService from "../pages/AllServices/SingleService";
import DoctorProfile from "../pages/Doctor/DoctorProfile";
import Doctor from "../pages/Doctor/Doctor";
import MainAppointment from "../pages/MainAppointment/MainAppointment";
import MyProfile from "../pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SIgnup />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/appointment",
        element: <MainAppointment />,
      },
      {
        path: "/services/:id",
        element: <SingleService />,
      },
      {
        path: "/doctor",
        element: <Doctor />,
      },
      {
        path: "/doctor/:id",
        element: <DoctorProfile />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
    ],
  },
]);
