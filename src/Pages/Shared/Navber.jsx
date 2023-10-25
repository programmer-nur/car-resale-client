import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import logo from '../../assets/orilogo.png'
import { AuthContext } from "../../Context/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut().then(() => {
      toast("Log Out", { autoClose: 500 });
    });
  };
  const menuItems = (
    <>
      <li className="text-base font-medium mx-2 p-0">
        <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" to="/">Home</Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" to="/categories">Categories</Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" to='/about'>About</Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" to='/blog'>Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="text-base font-medium mx-2 p-0">
            <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-base font-medium mx-2">
            <Link className="bg-none bg-inherit hover:bg-none hover:text-blue-500 py-2 rounded-md" onClick={handelLogOut}>SignOut</Link>
          </li>
        </>
      ) : (
        <>
          <li className="text-base bg-inherit text-blue-500 rounded-md font-medium  mx-2">
            <Link className="text-white bg-blue-500 py-2 rounded-md" to="/login"><AiOutlineLogin />Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="navbar container mx-auto  text-white flex justify-between">
        <div className="navbar-start md:ml-8">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu p-0 menu-compact dropdown-content shadow bg-black"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="mr-5 text-xl">
           <img src={logo} className="mr-5"  alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
