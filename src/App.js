import './App.css';
import {Catalog, MainPage} from './container';
import { NavBar, Footer } from './components';
import Partners from './components/Partners/Partners';
import images from './constants/images';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Find from "./container/FindRoom/FindRoom";


const router = createBrowserRouter([
    {
        path: "/toytherapy_room",
        element: <MainPage />,
    },
    {
        path: "/toytherapy_room/catalog",
        element: <Catalog />,
    },
    {
        path: "/toytherapy_room/findroom",
        element: <Find />,
    }
]);

function App() {
  return (
    <div className="app">
     {/*<NavBar />*/}
        <RouterProvider router={router} />
      {/*<Footer />*/}
    </div>
  );
}

export default App;
