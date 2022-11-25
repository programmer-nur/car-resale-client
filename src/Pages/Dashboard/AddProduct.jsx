
import { format } from "date-fns/esm";
import React, { useState } from "react";
import toast from "react-hot-toast";


const AddProduct = () => {
    const [time,setTime]=useState(new Date())
    const date = format(time, "PP")
    console.log(date)
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const newProduct = {
      image: form.image.value,
      name: form.name.value,
      location: form.location.value,
      ResalePrice: form.resaleprice.value,
      orginalprice: form.orginalprice.value,
      condition: form.condition.value,
      time:date
    };

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
            setTime()
        } else {
          toast.error("Some error occurred.Please try again");
        }
        form.reset();
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Add Product
      </h2>
      <div className="add-product form">
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold pl-2">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Photo Link Of Product"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold pl-2">
              Resale Price
              </span>
            </label>
            <input
              type="number"
              name="resaleprice"
              placeholder="resaleprice"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">
              Original Price
              </span>
            </label>
            <input
              type="number"
              name="orginalprice"
              placeholder="Original Price"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Condition</span>
            </label>
            <input
              type="number"
              name="condition"
              placeholder="condition"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />

            <input
              className="btn btn-primary text-white w-full rounded-full max-w-xs block my-4 mx-auto sm:mx-0"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;


