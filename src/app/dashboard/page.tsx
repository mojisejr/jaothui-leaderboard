import { auth } from "@clerk/nextjs";
import DashboardForm from "../ui/dashboard-form";
import { getUserByUserId } from "@/lib/user.action";
import Link from "next/link";
import { getEventName } from "@/lib/dashboard-form.action";
import DashboardData from "../ui/dashboard-data";
import DashboardHowTo from "../ui/dashboard-howto";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await getUserByUserId(userId as string);

  return (
    <div className="my-6 flex w-full justify-center">
      {user?.role === "ADMIN" ? (
        <div className="grid grid-cols-1 gap-4">
          <DashboardHowTo />
          <DashboardData />
          <DashboardForm />
        </div>
      ) : (
        <Link href="/">Back</Link>
      )}
    </div>
  );
}
