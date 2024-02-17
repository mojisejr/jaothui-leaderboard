import { getActiveType, getEventName } from "@/lib/dashboard-form.action";

export default async function LeaderboardTitle() {
  const eventName = await getEventName();
  const type = await getActiveType();
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className="text-white text-[50px] font-bold">{eventName?.name}</div>
      <div className="text-white text-[30px] font-bold">รุ่น {type?.name}</div>
    </div>
  );
}
