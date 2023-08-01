"use client";
import Link from "next/link";
export default function Home() {


  return (
    <main>
      <h1>Home Page</h1>
      <br />
      <Link href="/login">Go to Login</Link>
      <br />
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <br />
      <Link href="/contact">Go to Contact</Link>
      <br />
      <br />
      <Link href="/productWithCSR">Go to Product With CSR</Link>
      <br />
      <br />
      <Link href="/productWithSSR">Go to Product With SSR</Link>
    </main>
  );
}
