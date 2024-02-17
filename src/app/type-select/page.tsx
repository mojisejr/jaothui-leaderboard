import { getEventName } from "@/lib/dashboard-form.action";
import LeaderboardTitle from "../ui/leaderboard-title";
import TypeList from "../ui/type-list";

export default async function TypeSelectPage() {
  const eventName = await getEventName();
  return (
    <div className="my-6 flex w-full justify-center flex-col items-center gap-6">
      <div className="grid grid-col-1 min-w-[300px] gap-6">
        <div className="text-primary text-2xl wrap max-w-[500px]">
          {eventName?.name}
        </div>
        <TypeList />
      </div>
    </div>
  );
}
