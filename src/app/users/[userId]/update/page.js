"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { uri } from "../../../../../config";

async function getUserDetail(id) {
  let data = await fetch(`${uri}/user/${id}`);
  let finalData = await data.json();
  return finalData;
}

export default function UpdateUser(props) {
  const router = useRouter();
  const initData = {
    name: "",
    email: "",
    age: "",
  };
  const [data, setData] = useState({ ...initData });

  useEffect(() => {
    (async () => {
      let data = await getUserDetail(props.params.userId);
      setData({ ...data.result });
    })();
  }, []);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const sendData = JSON.stringify(data);
    let res = await fetch(`${uri}/user/${props.params.userId}`, {
      method: "put",
      body: sendData,
    });
    let response = await res.json();
    if (response.success) {
      alert("Update Successfully");
      setData({ ...response.result });
    } else {
      alert("Something is missing");
    }
  };

  return (
    <div className="userForm">
      <h1 className="heading">Update User</h1>
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
