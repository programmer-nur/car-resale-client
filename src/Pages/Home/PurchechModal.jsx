import { useContext} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PurchechModal = ({ modalCars,closeModel }) => {
  const { user } = useContext(AuthContext);
  const navigation =useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      productId: modalCars?._id,
      productName: modalCars?.name,
      productImg: modalCars?.img,
      productPrice: modalCars?.resaleprice,
      email: user?.email,
      customerName: user?.displayName,
      address: event.target.address.value,
      contact: event.target.contact.value,
    };
    fetch("https://car-resale-server-nurmohammad83.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigation('/dashboard/order')
          toast("Order Added");
        }
      });
    console.log(order);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <section className="bg-gray-200">
            <div className="">
              <div className="md:flex md:items-center p-4">
                <div>
                  <h2 className="mt-2 text-sm font-semibold">
                    Please Fill Up The Form Below To Complete The Purchase
                  </h2>
                </div>
              </div>

              <div className="order-form">
                <form
                  onSubmit={handleSubmit}
                  className="grid justify-center iec md:grid-cols-1 sm:gap-4 lg:gap-0 mx-auto"
                >
                  <div className="flex justify-center items-center flex-col">
                    <input
                      type="text"
                      name="name"
                      className="input my-1 rounded-md w-full max-w-xs"
                      defaultValue={user?.displayName}
                      disabled
                    />
                    <input
                      type="email"
                      name="email"
                      className="input my-1 rounded-md w-full max-w-xs"
                      defaultValue={user?.email}
                      disabled
                    />
                    <input
                      type="text"
                      name="productName"
                      className="input my-1 rounded-md w-full max-w-xs"
                      defaultValue={modalCars?.name}
                      disabled
                    />
                    <input
                      type="text"
                      name="productPrice"
                      className="input my-1 rounded-md w-full max-w-xs"
                      defaultValue={modalCars?.resaleprice}
                      disabled
                    />
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      className="input my-1 rounded-md w-full max-w-xs"
                      required
                    />
                    <input
                      type="number"
                      name="contact"
                      placeholder="Your Contact No"
                      className="input my-1 rounded-md w-full max-w-xs"
                    />
                    <div className="modal-action">
                      <label>
                        <input
                          htmlFor="booking-modal"
                          className=" bg-blue-500 hover:bg-blue-700 px-5 py-2 cursor-pointer w-full rounded-md font-semibold mb-2 text-white max-w-xs block"
                          type="submit"
                          onClick={closeModel}
                          value="Order Now"
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PurchechModal;
