import LeaderboardTable from "../ui/leaderboard-table";
import LeaderboardTitle from "../ui/leaderboard-title";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col w-full items-center gap-4 max-h-screen overflow-auto">
      <LeaderboardTitle />
      <LeaderboardTable />
    </div>
  );
}
