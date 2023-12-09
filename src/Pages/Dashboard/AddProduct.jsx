import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AddProduct = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/categories`);
      const data = await res.json();
      return data;
    },
  })
  const { user } = useContext(AuthContext);
  const [time, setTime] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  // const imgHostKey =process.env.REACT_APP_IMGBB_API
  const handelAddProducts = (data) => {

    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const newProduct = {
            sealerName: user?.displayName,
            email: user?.email,
            category_id: data.category,
            name: data.name,
            location: data.location,
            originalprice: data.originalprice,
            condition: data.condition,
            resaleprice: data.resaleprice,
            img: imgData.data.url,
            time,
          };

          fetch(`${process.env.REACT_APP_SERVER}/cars`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setTime();
                toast.success(`Order is added successfully`);
                navigate("/dashboard/myproduct");
              }
            });
        }
      });
  };

  return (
    <section className="p-4">
      <h2 className="text-3xl font-semibold text-[#937B92] mb-4">
        Add Product
      </h2>

      <form
        className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
        onSubmit={handleSubmit(handelAddProducts)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            disabled
            {...register("sealerName")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-400 py-2" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            disabled
            {...register("email")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-400 py-2" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            className="select input-bordered w-full max-w-xs"
            {...register("category")}
          >
            {
              categories.map(cat=>(
                <option key={cat._id} value={cat.id}>{cat.category}</option>
              ))
            }
          </select>
          {errors.category && (
            <p className="text-red-400 py-2" role="alert">
              {errors.category?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", { required: "Name is a requierd" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-400 py-2" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" {...register("img", { required: "Photo is a required" })} className="file-input file-input-bordered file-input-[#937B92] w-full max-w-xs" />
          {errors.img && (
            <p className="text-red-400 py-2" role="alert">
              {errors.img?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="Location"
            {...register("location", {
              required: "Location is a requierd",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-400 py-2" role="alert">
              {errors.location?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            placeholder="Resale Price"
            {...register("resaleprice", {
              required: "Resale Price is a requierd",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resaleprice && (
            <p className="text-red-400 py-2" role="alert">
              {errors.resaleprice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            placeholder="Original Price"
            {...register("originalprice", {
              required: "Original Price is a requierd",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalprice && (
            <p className="text-red-400 py-2" role="alert">
              {errors.originalprice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <input
            type="number"
            placeholder="Condition"
            {...register("condition", { required: "Name is a requierd" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.condition && (
            <p className="text-red-400 py-2" role="alert">
              {errors.condition?.message}
            </p>
          )}
        </div>
        <input
          className="btn py-4 bg-[#937B92] hover:bg-[#9d5b9a] border-[#937B92] hover:border-[#9d5b9a] max-w-xs mt-3 w-full"
          value="Add"
          type="submit"
        />
      </form>
    </section>
  );
};

export default AddProduct;
