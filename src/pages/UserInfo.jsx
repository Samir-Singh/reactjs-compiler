import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UserInfo = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>User Info</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default UserInfo;

export async function UserInfoLoader({ params }) {
  const { id } = params;
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  if (response?.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
