import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signinIcons from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ImageTobase64 from "../helpers/ImageTobase64";
import SummaryApi from "../common/api";
import { toast } from "react-toastify";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signup.url, {
        method: SummaryApi.signup.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataApi = await dataResponse.json();

      if (dataApi.status === "Success") {
        toast.success(dataApi.message);
        navigate("/login");
      }
      if (dataApi.status === "Error") {
        toast.error(dataApi.message);
      }

      console.log(dataApi);
    } else {
      toast.warn("password and confirm password must be same.");
    }
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await ImageTobase64(file);

    console.log(imagePic);

    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  return (
    <section id="signup">
      <div className=" mx-auto container p-4">
        <div className=" bg-white p-2 w-full max-w-sm mx-auto rounded-sm ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || signinIcons} alt="SignIn icon" />
            </div>
            <form>
              <label htmlFor="profilePic">
                <div className="text-xs bg-opacity-80 pb-[1.3rem] pt-1 bg-slate-200 py-4 text-center absolute bottom-0 w-full cursor-pointer">
                  Upload photo
                </div>
                <input
                  name="profilePic"
                  id="profilePic"
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="grid">
              <label htmlFor="name">Name:</label>
              <div className="bg-slate-200 p-2 rounded-sm">
                <input
                  name="name"
                  id="name"
                  onChange={handleOnChange}
                  value={data.name}
                  type="name"
                  placeholder="enter your name"
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
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
                  required
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
                  required
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
            <div className="grid">
              <label htmlFor="confirmPassword">confirm Password:</label>
              <div className="bg-slate-200 p-2 flex rounded-sm">
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleOnChange}
                  value={data.confirmPassword}
                  type={showConfirmPassword ? "" : "password"}
                  placeholder="confirm your password"
                  className="w-full h-full outline-none bg-transparent "
                  required
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                    ``;
                  }}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-sm hover:scale-110 transition-all mx-auto block mt-4">
              Signup
            </button>
          </form>
          <p className=" my-2 w-full max-w-[230px] mx-auto block">
            Already have an account?&nbsp;
            <Link to={"/login"} className="text-red-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
