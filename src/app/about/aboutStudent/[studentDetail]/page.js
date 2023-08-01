"use client";
import { useRouter } from "next/navigation";

export default function studentDetail({ params }) {
  const router = useRouter();
  return (
    <div>
      <h1>studentDetail</h1>
      <h3>Name: {params.studentDetail}</h3>
    </div>
  );
}
