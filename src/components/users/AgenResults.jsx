// import { useEffect, useState } from "react";
// import Spinner from "../layouts/Spinner";
// import UserItem from "./UserItem";

function UserResults() {
  return (
    <h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name Agen</th>
              <th>Tanggal Pemasangan</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </h1>
  );
}

//   <div className="overflow-x-auto">
//   <table className="table w-full">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//       </tr>
//     </thead>
//     <tbody>

//       <tr>
//         <th>1</th>
//         <td>Cy Ganderton</td>
//         <td>Quality Control Specialist</td>
//         <td>Blue</td>
//       </tr>

//       <tr className="hover">
//         <th>2</th>
//         <td>Hart Hagerty</td>
//         <td>Desktop Support Technician</td>
//         <td>Purple</td>
//       </tr>

//       <tr>
//         <th>3</th>
//         <td>Brice Swyre</td>
//         <td>Tax Accountant</td>
//         <td>Red</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// const [users, setUsers] = useState([]);
// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   fetchUsers();
// }, []);

// const fetchUsers = async () => {
//   const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   setUsers(data);
//   console.log(data);
//   setIsLoading(false);
// };

// if (!isLoading) {
//   return (
//     <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
//       {users.map((user) => (
//         <UserItem key={user.id} user={user} />
//       ))}
//     </div>
//   );
// } else {
//   return <Spinner />;
// }

// Table users ===================================

// if (!isLoading) {
//   <div className="overflow-x-auto">
//     <table className="table table-zebra w-full">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>user</th>
//         </tr>
//       </thead>
//       {users.map((user) => (
//         <tbody key={user.id}>
//           <tr>
//             <th>{user.id}</th>
//             <td>{user.login}</td>
//           </tr>
//         </tbody>
//       ))}
//     </table>
//   </div>;
// } else {
//   return <Spinner />;
// }

export default UserResults;
