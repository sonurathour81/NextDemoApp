import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutStudent">About Student</Link>
        </li>
        <li>
          <Link href="/about/aboutCollege">About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
