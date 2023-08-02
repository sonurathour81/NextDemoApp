"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { uri } from "../../../config";

export default function AddUser() {
  const router = useRouter();
  const initData = {
    name: "",
    email: "",
    age: "",
  };
  const [data, setData] = useState({ ...initData });

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const sendData = JSON.stringify(data);
    let res = await fetch(`${uri}/user`, {
      method: "post",
      body: sendData,
    });
    let response = await res.json();
    if (response.success) {
      alert(response.message);
      setData({ ...initData });
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="userForm">
      <h1 className="heading">Add User</h1>
      <br />
      <div className="cstmForm">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleUpdate}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleUpdate}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={data.age}
            onChange={handleUpdate}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
