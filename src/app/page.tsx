import Image from "next/image";
import { SignInButton, auth } from "@clerk/nextjs";
import MainMenu from "./ui/main-menu";
import SignIn from "./ui/signin-button";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();
  return (
    <main className="mt-10 flex w-full items-center flex-col gap-6">
      <div className="w-56">
        <Image
          src="/images/thuiLogo.png"
          width={1000}
          height={760}
          alt="jaothui logo"
        />
      </div>
      {userId ? (
        <MainMenu />
      ) : (
        <div className="max-w-md flex flex-col gap-2">
          <SignIn />
          <Link className="btn btn-primary" href="/leaderboard">
            Leaderboard
          </Link>
        </div>
      )}
    </main>
  );
}
