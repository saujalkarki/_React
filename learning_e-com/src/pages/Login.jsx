import { useState } from "react";
import { Link } from "react-router-dom";
import signinIcons from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(data);

  return (
    <section id="login">
      <div className=" mx-auto container p-4">
        <div className=" bg-white p-2 w-full max-w-sm mx-auto rounded-sm ">
          <div className="w-20 h-20 mx-auto">
            <img src={signinIcons} alt="SignIn icon" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid">
              <label htmlFor="email">Email:</label>
              <div className="bg-slate-200 p-2 rounded-sm">
                <input
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  value={data.email}
                  type="email"
                  placeholder="enter your email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label htmlFor="password">password:</label>
              <div className="bg-slate-200 p-2 flex rounded-sm">
                <input
                  name="password"
                  id="password"
                  onChange={handleOnChange}
                  value={data.password}
                  type={showPassword ? "" : "password"}
                  placeholder="enter your password"
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    ``;
                  }}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-sm hover:scale-110 transition-all mx-auto block mt-2">
              Login
            </button>
            <Link
              to={"/forgotpassword"}
              className=" w-full max-w-[130px] mx-auto block underline"
            >
              Forogt password?
            </Link>
          </form>
          <hr className="mt-2" />
          <p className=" my-2 w-full max-w-[200px] mx-auto block">
            Don&apos;t have account?{" "}
            <Link to={"/signup"} className="text-red-700">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
