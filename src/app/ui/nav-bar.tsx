"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BackButton from "./back-button";
import NavbarTitle from "./navbar-title";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/leaderboard") {
    return null;
  }

  return (
    <div className="navbar bg-base-100 text-primary">
      <div className="navbar-start">
        <Link href="/" className="w-16">
          <Image
            src="/images/thuiLogo.png"
            width={1000}
            height={760}
            alt="jaothui logo"
          />
        </Link>
      </div>
      <div className="navbar-center">
        <NavbarTitle />
      </div>
      <div className="navbar-end">
        {pathname === "/" ? null : <BackButton />}
      </div>
    </div>
  );
}
