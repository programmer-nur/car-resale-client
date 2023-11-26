import React from "react";
import { useLoaderData, useNavigation,  } from "react-router-dom";
import Loading from "../Shared/Loading";
import OrderDetails from "./OrderDetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData([]);
    const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Complete Payment
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="order-details">
          <OrderDetails
            key={order._id}
            order={order}
          ></OrderDetails>
        </div>
        <div className="payment-stripe">
          <div className="card max-w-sm bg-base-100 hover:shadow-lg">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckOutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
