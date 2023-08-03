"use client";
import Link from "next/link";
import { uri } from "../../../../config";
import { useEffect, useState } from "react";

async function getUserDetail(id) {
  let data = await fetch(`${uri}/user/${id}`);
  let finalData = await data.json();
  return finalData;
}

export default function UserDetail(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      let data = await getUserDetail(props.params.userId);
      setData({ ...data });
    })();
  }, []);
  const { result, success } = data;

  return (
    <div>
      <h1>Users detail page</h1>
      <br />
      <br />
      <Link href="/users">Go to Users</Link>
      <br />
      <br />

      <div>
        <h3>ID: {result?.id}</h3>
        <h3>Name: {result?.name}</h3>
        <h3>Email: {result?.email}</h3>
        <h3>Age: {result?.age}</h3>
      </div>
    </div>
  );
}
