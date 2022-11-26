import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('token')}`
              }
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div className="m-3">
      <h3 className="text-3xl mb-2">My Orders</h3>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <span></span>
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {
              orders?.length &&
              orders?.map((order, i) => (
                <tr key={i}>
                  <th>
                    <label>
                      <span>{i + 1}</span>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order?.productImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{order?.productName}</td>
                  <td>{order?.productPrice}</td>
                  {order?.productPrice && !order?.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {order?.price && order?.paid && (
                    <span className="btn bg-primary">Paid</span>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
