import { useState } from "react";
import Role from "../common/role";
import { MdOutlineClose } from "react-icons/md";
import SummaryApi from "../common/api";
import { toast } from "react-toastify";

export function ChangeUserRole({
  userId,
  name,
  email,
  role,
  onClose,
  callFunc,
}) {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });

    const responseData = await fetchResponse.json();

    console.log(responseData);

    if (responseData.status === "Success") {
      toast.success(responseData.message);
      onClose();
      callFunc();
    }
    console.log("success1");

    if (responseData.status === "Error") {
      toast.success(responseData.messages);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
        <button className="block text-3xl ml-auto" onClick={onClose}>
          <MdOutlineClose />
        </button>
        <h1 className="pb-4 text-lg font-medium">Change User Role</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className="flex items-center justify-between ">
          <p>Role </p>
          <select
            className="border px-4 py-1"
            value={userRole}
            onChange={handleOnChangeSelect}
            name="Role"
            id="Role"
          >
            {Object.values(Role).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="w-fit mx-auto mt-3 mb-1 block py-1 px-3 rounded-full bg-red-600 hover:bg-red-800"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
}
