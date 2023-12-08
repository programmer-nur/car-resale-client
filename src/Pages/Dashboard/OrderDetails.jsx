import React from "react";

const OrderDetails = ({ order }) => {
  const { address, contact, email, customerName, productName, productPrice } =
    order;

  return (
    <section>
      <div className="card max-w-sm md:max-w-lg bg-base-100 p-4 hover:shadow-lg">
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="font-bold text-[#937B92]">
                    Customer Details
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm font-bold">Name</span>
                </td>
                <td>
                  <span className="text-sm">: {customerName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm font-bold">Email</span>
                </td>
                <td>
                  <span className="text-sm">: {email}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm font-bold">Contact No</span>
                </td>
                <td>
                  <span className="text-sm">
                    : {contact ? contact : "Not Provided"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm font-bold">
                    Delivery <br /> Address
                  </span>
                </td>
                <td>
                  <span className="text-sm">: {address}</span>
                </td>
              </tr>
              <tr>
                <td className="pt-8">
                  <span className="font-bold text-[#937B92]">Order Details</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm font-bold">Name</span>
                </td>
                <td>
                  <span className="text-sm">: {productName}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="text-sm font-bold">Price</span>
                </td>
                <td>
                  <span className="text-sm">: {productPrice}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
