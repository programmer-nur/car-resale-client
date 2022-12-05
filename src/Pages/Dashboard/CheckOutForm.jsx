import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckOutForm = ({ order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { _id, productName,productPrice,email,customerName } = order

  useEffect(() => {
    fetch("https://car-resale-server-nurmohammad83.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [productPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || processing) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm car payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: email,
          },
        },
      });

    if (intentError?.message) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setSuccess("Congratulations! Your payment has been successful");
      setTransactionId(paymentIntent.id);
    }
if(paymentIntent.status === 'succeeded'){
  const payment = {
    orderId: _id,
    transactionId: paymentIntent.id,
    customerName: customerName,
    productName:productName,
    price:productPrice
  };

  fetch(`https://car-resale-server-nurmohammad83.vercel.app/payments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(payment),
  })
    .then((res) => res.json())
    .then((data) => {
     
      console.log(data.insertedId);
      if (data.insertedId) {
        setSuccess("Congrats! your payment completed");
        setTransactionId(paymentIntent.id);
        setProcessing(false);
      }
    });
}
    // store payment on database
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded-full w-1/2 mx-auto block text-white mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transaction id:
            <span className="font-bold">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
