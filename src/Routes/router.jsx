import DashboardLayout from "../Layout/DashboardLayout";
import AllSealer from "../Pages/Dashboard/AllSealer";
import MyOrders from "../Pages/Dashboard/MyOrders";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AddProducts from "../Pages/Dashboard/AddProduct";
import CarItems from "../Pages/Home/CarItems";
import Categories from "../Pages/Home/Categories";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

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
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
    },
    {
        
            path:'/dashboard',
        
            element:<DashboardLayout/>,
            children:[
                {
                    path:'/dashboard',
                    element:<MyOrders/>
                },
                {
                    path:'/dashboard/allsealer',
                    element:<AllSealer/>
                },
                {
                    path:'/dashboard/addproduct',
                    element:<AddProducts/>
                },
                {
                    path:'/dashboard/allbuyer',
                    element:<AllBuyer/>
                },
                {
                    path:'/dashboard/payment/:id',
                    loader:({params})=> fetch(`https://doctor-portal-server-orpin.vercel.app/bookings/${params.id}`),
                    element:<Payment/>
                },
            ]
    
        
    }
    
])
export default router;