import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../../assets/mainlog.png";
import { AuthContext } from "../../Context/AuthProvider";
import avater from "../../assets/ava.png";

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
        <Link
          className="bg-none bg-inherit hover:bg-none hover:text-[#937B92] py-2 rounded-md"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link
          className="bg-none bg-inherit hover:bg-none hover:text-[#937B92] py-2 rounded-md"
          to="/categories"
        >
          Categories
        </Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link
          className="bg-none bg-inherit hover:bg-none hover:text-[#937B92] py-2 rounded-md"
          to="/about"
        >
          About
        </Link>
      </li>
      <li className="text-base font-medium mx-2 p-0">
        <Link
          className="bg-none bg-inherit hover:bg-none hover:text-[#937B92] py-2 rounded-md"
          to="/blog"
        >
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          <div className="dropdown  sm:dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border-white rounded-full">
                <img src={avater} className="w-6 h-6" alt="avater" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52"
            >
              <li className="text-base font-medium p-0">
                <Link
                  className="hover:bg-gray-100 bg-inherit w-full hover:text-[#937B92] text-white py-2 rounded-md"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="text-base w-full font-medium">
                <Link
                  className="hover:bg-gray-100 text-white bg-inherit w-full hover:text-[#937B92] py-2 rounded-md"
                  onClick={handelLogOut}
                >
                  SignOut
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li className="text-base bg-inherit text-[#937B92] rounded-md font-medium  mx-2">
            <Link
              className="text-white bg-[#937B92] hover:bg-[#8c488c] py-2 rounded-md"
              to="/login"
            >
              <AiOutlineLogin />
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-[#F7F2F7] sticky font-roboto top-0 z-50">
      <div className="navbar container mx-auto   text-black flex justify-between">
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
              className="menu p-5 menu-compact dropdown-content shadow bg-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="mr-5 text-xl">
            <span className="uppercase font-bold">Car-<span className="text-[#937B92]">Resale</span></span>
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
