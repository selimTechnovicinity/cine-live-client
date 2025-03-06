"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const AuthButton = dynamic(() => import("@/ui/authButton/AuthButton"), {
    ssr: false,
  });

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:underline">
              Users
            </Link>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
