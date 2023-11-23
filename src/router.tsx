import {
    createBrowserRouter,
  } from "react-router-dom";
  import Home from "./containers/home"
  import Result from "./containers/result";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/result",
        element: <Result/>
    }
  ])

  export default router