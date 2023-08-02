"use client";
import { useRouter } from "next/navigation";
import { uri } from "../../../config";

export default function UserListTable({ data }) {
  const router = useRouter();

  const deleteUser = async (id) => {
    let res = await fetch(`${uri}/user/${id}`, {
      method: "delete",
    });
    let response = await res.json();
    if (response.success) {
      alert("Deleted Successfully");
    } else {
      alert("Something wrong");
    }
  };

  let renderDiv = (val) => {
    return (
      <tr
        key={val.id}
        onClick={() => {
          router.push(`/users/${val.id}`);
        }}
      >
        <td>{val.id}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.age}</td>
        <td>
          <div className="btnFlx">
            <button
              onClick={(e) => {
                router.push(`/users/${val.id}/update`);
                e.stopPropagation();
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteUser(val.id);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{data.map((val) => renderDiv(val))}</tbody>
      </table>
  );
}
