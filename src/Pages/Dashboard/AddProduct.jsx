import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [time, setTime] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate()
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
    const url = `https://api.imgbb.com/1/upload?key=226a328101beecc1e23ca13cbb98984c`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {

        if (imgData.success) {
          const  newProduct={
            sealerName:user?.displayName,
            email:user?.email,
            category_id:data.category,
            name:data.name,
            location:data.location,
            originalprice:data.originalprice,
            condition:data.condition,
            resaleprice:data.resaleprice,
            img:imgData.data.url,
            time,
        }
      
          console.log(newProduct);
          fetch(`https://car-resale-server-nurmohammad83.vercel.app/cars`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                setTime()
                toast.success(`Order is added successfully`);
                navigate('/dashboard/myproduct')
              }
            });
        }
      });
  };
  
  return (
    <section className="p-4">
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Add Product
      </h2>



      <form className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto" onSubmit={handleSubmit(handelAddProducts)}>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            disabled
            {...register("sealerName",)}
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
              <input
                type="text"
                placeholder="1,2,3 category are avialible"
                {...register("category", {
                  required: "Category is a requierd",
                })}
                className="input input-bordered w-full max-w-xs"
              />
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
          <input
            type="file"
            {...register("img", { required: "Photo is a requierd" })}
            className="input input-bordered w-full max-w-xs"
          />
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
          className="btn py-4 btn-accent max-w-xs mt-3 w-full"
          value="Add Doctor"
          type="submit"
        />
      </form>












      {/* <div className="add-product form">
        <form
          onSubmit={handleSubmit(handelAddProducts)}
          className=
        >
           
            
            
        
          
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="number"
                prefix="Resale Price"
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
              className="btn py-4 my-3 max-w-xs btn-accent w-full"
              value="Add Products"
              type="submit"
            />
            
      
        </form> */}
      {/* </div> */}
    </section>
  );
};

export default AddProduct;
