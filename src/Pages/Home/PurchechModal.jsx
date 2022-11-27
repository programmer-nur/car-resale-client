import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const PurchechModal = ({ modalCars }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      productId: modalCars._id,
      productName: modalCars.name,
      productImg: modalCars.img,
      productPrice: modalCars.resaleprice,
      email: user?.email,
      customerName: user?.displayName,
      address: event.target.address.value,
      contact: event.target.contact.value,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
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
          <section className="min-h-screen bg-slate-300">
            <div className=" w-80 md:w-9/12  mx-auto">
              <div className="md:flex md:items-center p-4">
                <div className="md:mx-4">
                  <h2 className="mt-2 text-sm">
                    Please Fill Up The Form Below To Complete The Purchase
                  </h2>
                </div>
              </div>

              <div className="order-form">
                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-1 sm:gap-4 lg:gap-0 mx-auto"
                >
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input rounded-md w-full max-w-xs"
                      defaultValue={user?.displayName}
                      disabled
                    />
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input rounded-md w-full max-w-xs"
                      defaultValue={user?.email}
                      disabled
                    />
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Product Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      className="input rounded-md w-full max-w-xs"
                      defaultValue={modalCars?.name}
                      disabled
                    />
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Product Price
                      </span>
                    </label>
                    <input
                      type="text"
                      name="productPrice"
                      className="input rounded-md w-full max-w-xs"
                      defaultValue={modalCars?.resaleprice}
                      disabled
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Address
                      </span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      className="input rounded-md w-full max-w-xs"
                      required
                    />
                    <label className="label">
                      <span className="label-text font-semibold pl-3">
                        Contact No
                      </span>
                    </label>
                    <input
                      type="number"
                      name="contact"
                      placeholder="Your Contact No"
                      className="input rounded-md w-full max-w-xs"
                    />
                    <div className="modal-action">
                      <label>
                        <input
                          htmlFor="booking-modal"
                          className="btn btn-primary w-full rounded-full text-white max-w-xs block my-4"
                          type="submit"
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
