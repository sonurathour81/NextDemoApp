import Link from "next/link";

export default function NabBar() {
  return (
    <div className="cstmNav">
      <Link href="/login">Login</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/productWithCSR">Product With CSR</Link>
      <Link href="/productWithSSR">Product With SSR</Link>
      <Link href="/users">Users</Link>
      <Link href="/addUser">Add User</Link>
      <Link href="/productListWithDB">Product list</Link>
      <Link href="/productListWithDB/addProduct">Add Product</Link>
    </div>
  );
}
