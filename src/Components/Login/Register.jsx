import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Swal.fire({
        //   icon: "success",
        //   title: "Yes",
        //   text: "SuccessFully Registered !",
        // });
      })
      .catch((error) => {
        console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Something Wrong!",
        // });
      });
  };

  return (
    <div className="hero mb-10  bg-base-200">
      <div className="hero mt-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img
              src="https://cdn.dribbble.com/users/1917942/screenshots/7139971/media/d802dc4eadb049f5a9684759cfdfbffa.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
              <h1 className="text-3xl text-center text-yellow-500 font-bold">
                Sign Up
              </h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 border border-0"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already Have an Account?{" "}
                <Link className="text-yellow-500 ms-3 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
