"use client";
import { useRouter } from "next/navigation";

export default function AboutCollege() {
  const router = useRouter();
  return (
    <div>
      <h1>About College</h1>
      <button onClick={() => router.push("/")}>Go to home</button>
    </div>
  );
}
