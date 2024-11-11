import { Logo } from "./index";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Header() {
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
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
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
            <Link to={"/login"}>
              <button className="px-3 py-1 rounded-full outline-none text-white bg-red-600 hover:bg-red-800">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
