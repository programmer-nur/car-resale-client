import CarItems from "../Pages/Home/CarItems";
import Categories from "../Pages/Home/Categories";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/categories',
                element:<Categories/>
            },
            {
                path:'/categories/:id',
                loader:({params})=>fetch(`http://localhost:5000/categories${params.id}`),
                element:<CarItems/>
            }
        ]
    }
])
export default router;