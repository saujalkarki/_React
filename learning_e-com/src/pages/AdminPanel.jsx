import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Role from "../common/role";

export function AdminPanel() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);

  useEffect(() => {
    if (user?.role !== Role.Admin) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className=" min-h-[calc(100vh-120px)] hidden md:flex">
      <aside className="bg-white min-h-full w-full  max-w-72 customShadow">
        <div className="h-32 flex items-center justify-center flex-col">
          <div className="text-[5rem] cursor-pointer">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                alt={user?.name}
                className="w-[4rem] h-[4rem] rounded-full border-2 border-black"
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className=" capitalize text-xl font-semibold">{user?.name}</p>
          <p className="  text-base font-medium">{user?.role}</p>
        </div>
        <div className=" mt-6">
          <nav className="flex flex-col">
            <Link to={"allusers"} className=" px-2 py-1 hover:bg-slate-100">
              All users
            </Link>
            <Link to={"allproduct"} className=" px-2 py-1 hover:bg-slate-100">
              All Product
            </Link>
          </nav>
        </div>
      </aside>
      <main className=" w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
}
