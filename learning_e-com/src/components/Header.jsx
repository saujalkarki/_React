import { Logo } from "./index";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/api";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import Role from "../common/role";

export function Header() {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOUt = async () => {
    const fetchData = await fetch(SummaryApi.logOut.url, {
      method: SummaryApi.logOut.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.status === "Success") {
      toast.success("User Logged out successfully.");
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.status === "Error") {
      toast.error("Error logging out.");
    }
  };

  const handleAdminPanel = () => {
    if (user) {
      navigate("/adminpanel/allproduct");
    } else {
      toast.warn("Please login to access admin pannel.");
    }
  };

  console.log(user);
  console.log(user?._id);

  return (
    <header className=" h-16 shadow-xl">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo h={150} w={100} />
          </Link>
        </div>

        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border border-black rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none bg-transparent"
            id="search_box"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <FaSearch />
          </div>
        </div>

        <div className="flex gap-6">
          <div className=" relative group flex justify-center">
            {user?._id && (
              <div className="text-3xl cursor-pointer">
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    alt={user?.name}
                    className="w-[2.2rem] h-[2.2rem] rounded-full border-2 border-black"
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}

            {user?.role === Role.Admin && (
              <div className="hidden cursor-pointer group-hover:block absolute bg-slate-200 hover:bg-slate-300 bottom-0 top-8 h-fit py-2  px-4 rounded-b-md">
                <div
                  onClick={handleAdminPanel}
                  className=" whitespace-nowrap hidden md:block"
                >
                  Admin panel
                </div>
              </div>
            )}
          </div>
          <div className="text-3xl relative">
            <span>
              <FaCartShopping />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            {user?._id ? (
              <div className="pr-2 py-1 text-2xl cursor-pointer">
                <RiLogoutBoxRLine onClick={handleLogOUt} />
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="px-3 py-1 rounded-full outline-none text-white bg-red-600 hover:bg-red-800">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
