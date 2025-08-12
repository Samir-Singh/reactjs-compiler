import axios from "axios";
// import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const UserList = () => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getUserData = async () => {
  //   setLoading(true);
  //   try {
  //     let response = await axios.get("https://dummyjson.com/users");
  //     if (response?.status === 200) {
  //       setUsers(response.data.users);
  //     } else {
  //       setUsers([]);
  //     }
  //   } catch (_) {
  //     setUsers([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  const { users } = useLoaderData();

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {users?.map((item) => (
          <div className="w-60 border p-5 rounded" key={item?.id}>
            <p>Name : {item?.firstName}</p>
            <p>Age : {item?.age}</p>
            <NavLink
              to={`/user-info/${item?.id}`}
              className="text-blue-500 mt-5 block"
            >
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;

export async function UserLoader() {
  const response = await axios.get("https://dummyjson.com/users");
  if (response?.status === 200) {
    return response.data;
  } else {
    return [];
  }
}
