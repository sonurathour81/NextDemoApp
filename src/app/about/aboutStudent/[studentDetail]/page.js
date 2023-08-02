"use client";

export default function studentDetail({ params }) {
  return (
    <div>
      <h1>studentDetail</h1>
      <h3>Name: {params.studentDetail}</h3>
    </div>
  );
}
