import Link from "next/link";
import UserListTable from "./userListTable";
import { uri } from "../../../config";

async function getUsersList() {
  let data = await fetch(`${uri}/user`);
  let finalData = await data.json();
  return finalData;
}

export default async function Users() {
  let data = await getUsersList();
  return (
    <div>
      <h1>Users page</h1>
      <UserListTable data={data} />
    </div>
  );
}
