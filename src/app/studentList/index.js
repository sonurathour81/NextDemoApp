"use client";
import { useRouter } from "next/navigation";

export default function StudentList() {
  const router = useRouter();
  const arr = ["sonu", "nitin", "anand", "gaurav", "sahil"];
  return (
    <div>
      {arr.map((val) => {
        return (
          <div onClick={() => router.push(`/about/aboutStudent/${val}`)}>
            {val}
          </div>
        );
      })}
    </div>
  );
}
