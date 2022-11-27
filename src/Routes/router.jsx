import DashboardLayout from "../Layout/DashboardLayout";
import AllSealer from "../Pages/Dashboard/AllSealer";
import MyOrders from "../Pages/Dashboard/MyOrders";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AddProducts from "../Pages/Dashboard/AddProduct";
import CarItems from "../Pages/Home/CarItems";
import Categories from "../Pages/Home/Categories";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Payment from "../Pages/Dashboard/Payment";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyProducts from "../Pages/Dashboard/MyProducts";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage/>,
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
                element:<PrivetRoute><CarItems/></PrivetRoute>
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
            errorElement:<ErrorPage/>,
            element:<PrivetRoute><DashboardLayout/></PrivetRoute>,
            children:[
                {
                    path:'/dashboard',
                    element:<PrivetRoute><MyProfile/></PrivetRoute>
                },
                {
                    path:'/dashboard/alluser',
                    element:<PrivetRoute><AllUsers/></PrivetRoute>
                },
                {
                    path:'/dashboard/myproduct',
                    element:<PrivetRoute><MyProducts/></PrivetRoute>
                },
                {
                    path:'/dashboard/order',
                    element:<PrivetRoute><MyOrders/></PrivetRoute>
                },
                {
                    path:'/dashboard/allsealer',
                    element:<PrivetRoute><AllSealer/></PrivetRoute>
                },
                {
                    path:'/dashboard/addproduct',
                    element:<PrivetRoute><AddProducts/></PrivetRoute>
                },
                {
                    path:'/dashboard/allbuyer',
                    element:<PrivetRoute><AllBuyer/></PrivetRoute>
                },
                {
                    path:'/dashboard/payment/:id',
                    loader:({params})=> fetch(`http://localhost:5000/orders/${params.id}`),
                    element:<Payment/>
                },
            ]
    
        
    }
    
])
export default router;