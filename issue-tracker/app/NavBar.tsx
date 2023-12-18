'use client'

import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Dashboard" },
  { href: "/issues", label: "Issues" },
];


export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav className="flex space-x-10 border-b border-slate-300 p-5 items-center h-14">
      <Link href="/"><AiFillBug className="text-2xl" /></Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`${link.href === pathName ? "text-zinc-900" : "text-zinc-500"}  
              hover:text-zinc-900 transition-colors duration-200`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
