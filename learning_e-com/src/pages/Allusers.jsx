import { useEffect, useState } from "react";
import SummaryApi from "../common/api";

export function Allusers() {
  const [allUser, setAllUser] = useState([]);

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    console.log(dataResponse);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return <h1>This is all users page.</h1>;
}
