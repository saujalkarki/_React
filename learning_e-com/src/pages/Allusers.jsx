import { useEffect, useState } from "react";
import SummaryApi from "../common/api";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEditOutline } from "react-icons/md";
import { ChangeUserRole } from "../components/index";

export function Allusers() {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    _id: "",
    name: "",
    email: "",
    role: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.status === "Success") {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.status === "Error") {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log("uud", updateUserDetails);
  console.log("uud_id", updateUserDetails._id);

  return (
    <div>
      <table className=" w-full userTable ">
        <thead className="bg-black text-white">
          <tr>
            <th>SN.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>CREATED DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((elem, index) => {
            return (
              <tr key={elem?._id}>
                <td>{index + 1}</td>
                <td>{elem?.name}</td>
                <td>{elem?.email}</td>
                <td>{elem?.role}</td>
                <td>{moment(elem?.createdAt).format("LL")}</td>
                <td>
                  <button
                    className="bg-zinc-300 p-2 rounded-full cursor-pointer hover:bg-white"
                    onClick={() => {
                      console.log(elem);
                      setOpenUpdateRole(true);
                      setUpdateUserDetails(elem);
                    }}
                  >
                    <MdModeEditOutline />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => {
            setOpenUpdateRole(false);
          }}
          userId={updateUserDetails._id}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
}
