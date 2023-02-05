import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

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
      <li className=" mx-2 hover:text-orange-500">
        <Link to="/">Home</Link>
      </li>
      <li className=" mx-2 hover:text-orange-500">
        <Link to="/categories">Categories</Link>
      </li>
      <li className=" mx-2 hover:text-orange-500">
        <Link to='/about'>About</Link>
      </li>
      <li className=" mx-2 hover:text-orange-500">
        <Link to='/blog'>Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="m-2 hover:text-orange-500">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className=" mx-2 hover:text-orange-500">
            <Link onClick={handelLogOut}>SignOut</Link>
          </li>
        </>
      ) : (
        <>
          <li className=" mx-2 hover:text-orange-500">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-black text-white flex justify-between">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content shadow bg-black rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span className="text-orange-600">NM</span><p>CARMART</p>
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
