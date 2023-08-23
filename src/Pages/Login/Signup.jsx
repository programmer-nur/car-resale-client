import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useToken from '../../hooks/useToken'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
const Signup = () => {
  const {createUser,updateUser,createUserGoogle}=useContext(AuthContext)
  const [error,setError]=useState('')
  const navigate = useNavigate()
  const [createEmailUser, setCreateEmailUser]=useState('')
  const [token]=useToken(createEmailUser)


  if(token){
    navigate('/')
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignUp = (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{
        saveMongodbUser(data.name,data.email,data.role)

        toast('User Create Successfully')
      })
      .catch(err=>{

        setError(err.message)
      })
      console.log(user);
    })
  };

  const handelGoogleIn = () => {
    const role = 'Buyer'
    createUserGoogle()
    .then((res)=>{
      const user= res.user
      saveMongodbUser(user?.displayName,user?.email,role)
      toast.success('User Create Successfully')
    })
    .catch(err=>{
      setError(err.message)
    })
  };

  const saveMongodbUser = (name,email,role)=>{
    const user ={name,email,role}
    fetch(`https://car-resale-server-nurmohammad83.vercel.app/users`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCreateEmailUser(email)
     
    })
  }

  return (
    <section>
      <div className="h-[700px] flex  justify-center items-center ">
        <div className="w-96 p-7 rounded-xl shadow-xl bg-gray-100">
          <h3 className="text-xl text-center font-semibold">Sign Up</h3>
          <form onSubmit={handleSubmit(handelSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Name
  </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
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
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Buyer/Seller
  </span>
              </label>
            

              <select  {...register("role")} className="select select-bordered w-full max-w-xs">
                <option hidden selected>
                  Buyer/Sealer ?
                </option>
                <option selected value="Buyer">Buyer</option>
                <option value="Sealer">Sealer</option>
              </select>

              {errors.name && (
                <p className="text-red-400 py-2" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email Address is required",
                })}
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
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Password
  </span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-400 py-2" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <label className="label mb-2">
                <span className="label-text-alt">Forget Password?</span>
              </label>
            </div>
            <input
              className="py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-md text-white font-semibold w-full"
              value="Sign Up"
              type="submit"
            />
            {
            error && <p className='text-red-500'>{error}</p>
          }
          </form>
          <p className="py-5">
            New to Car Sealer?
            <Link className="text-primary" to="/login">
              Already have an account?
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <button
            onClick={handelGoogleIn}
            className="bg-gray-400 justify-center text-white rounded-md flex items-center gap-2 w-full py-3"
          >
            <AiFillGoogleCircle className="text-xl"/>
            Google With Connected
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
