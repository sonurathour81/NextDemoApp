"use client";
import StudentList from "@/app/studentList";
import { useRouter } from "next/navigation";

export default function AboutStudent() {
  const router = useRouter();
  return (
    <div>
      <h1>About Student</h1>
      <h3>Student List</h3>
      <StudentList />
    </div>
  );
}
