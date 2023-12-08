import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSealer from "../hooks/useSealer";
import Navber from "../Pages/Shared/Navber";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSealer] = useSealer(user?.email);
  return (
    <div>
      <Navber />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side font-roboto">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#937B92] text-white ">
            <h2 className="text-center text-2xl text-white font-poppins font-bold mb-1">
              Dashboard
            </h2>
            <hr className="mb-4" />
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {isBuyer && (
              <li>
                <Link to="/dashboard/order">My Orders</Link>
              </li>
            )}
            {isSealer && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/alluser">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsealer">All Sealer</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/report">All Reported Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
