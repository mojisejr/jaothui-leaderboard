import Link from "next/link";
import SignOut from "./signout-button";
import { getUserByUserId } from "@/lib/user.action";
import { auth } from "@clerk/nextjs";
import NewNameForm from "./new-name.form";

export default async function MainMenu() {
  const { userId } = auth();
  const user = await getUserByUserId(userId as string);

  if (user?.name === null || user?.name === undefined) {
    return <NewNameForm />;
  }

  return (
    <ul className="min-w-[300px] grid grid-cols-1 gap-3">
      <li>
        {user?.role === "ADMIN" ? (
          <Link className="btn btn-primary w-full" href="/dashboard">
            ตั้งค่า
          </Link>
        ) : null}
      </li>
      <li>
        <Link className="btn btn-primary w-full" href="/type-select">
          ไปให้คะแนน
        </Link>
      </li>
      <li>
        <Link className="btn btn-primary w-full" href="/leaderboard">
          Leaderboard
        </Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  );
}
