import { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    console.log(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }

  //Table users ===================================
  // <div className="overflow-x-auto">
  //     <table className="table table-zebra w-full" >
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>user</th>
  //         </tr>
  //       </thead>
  //   {users.map((user) => (
  //       <tbody key={user.id}>
  //         <tr>
  //           <th>{user.id}</th>
  //           <td>{user.login}</td>
  //         </tr>
  //       </tbody>
  //       ))}
  //     </table>
  // </div>
}

export default UserResults;
