import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";
import { AiFillGoogleCircle } from "react-icons/ai";
import loginImg from "../../assets/Mobile login-rafiki.png";

const Login = () => {
  const { createUserGoogle, logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        setError("");
        setLoginUserEmail(data.email);
        toast("Login Successfully");
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handelGoogleIn = () => {
    const role = "Buyer";
    createUserGoogle().then((res) => {
      const user = res.user;
      saveMongodbUser(user?.displayName, user.email, role);
      toast("Login Successfully");
      navigate(from, { replace: true });
    });
  };

  const saveMongodbUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`https://car-resale-server-nurmohammad83.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginUserEmail(email);
      });
  };
  return (
    <section
      className="min-h-screen bg-cover"
      style={{
        background: `url("https://alpha-steelwork.web.app/static/media/wave.1a206bdb03501f050d60f606ac5bb1c0.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="font-roboto w-full flex justify-center sm:justify-between">
        <div className="md:w-1/2 p-5 sm:p-0 w-full flex justify-center items-center">
          <div className="w-96 bg-white px-5 py-4 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-center py-5">Log in</h3>
            <form onSubmit={handleSubmit(handelLogin)}>
              <div className="form-control w-full">
                <label className="label">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <p className="text-red-400 py-2" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 charectear or longer",
                    },
                  })}
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <p className="text-red-400 py-2" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <input
                className=" py-2 mt-3 cursor-pointer bg-gradient-to-r to-black/70 from-blue-500  rounded-md text-white font-semibold w-full"
                value="Log In"
                type="submit"
              />
            </form>
            <p>{error && <p className="text-red-500">{error}</p>}</p>
            <p className="py-5 text-sm text-end">
              New to Car Sealer?
              <Link className="text-blue-500 font-bold" to="/signup">
                Create an Account
              </Link>
            </p>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <button
              onClick={handelGoogleIn}
              className="bg-blue-100/90 justify-center text-blue-500 rounded-md flex items-center gap-2 w-full py-3"
            >
              <AiFillGoogleCircle className="text-xl" />
              Continue With Google
            </button>
          </div>
        </div>
        <div className="w-1/2 hidden md:block px-10">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
