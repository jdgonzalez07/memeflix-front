
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutInicio from "./pages/Layouts/LayoutInicio";
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Detail from './pages/Detail/Detail';
import Series from './pages/Series/Series';

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutInicio />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/series",
          element: <Series />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/:title",
          element: <Detail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
