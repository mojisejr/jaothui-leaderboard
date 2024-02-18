import { getActiveType, getEventName } from "@/lib/dashboard-form.action";
import { Suspense } from "react";
import Loading from "./loading-screen";

export default async function DashboardData() {
  const event = await getEventName();
  const type = await getActiveType();
  return (
    <Suspense fallback={<Loading />}>
      <table className="table min-w-[300px]">
        <tbody>
          <tr>
            <th>ชื่องาน</th>
            <td>{event?.name}</td>
          </tr>
          <tr>
            <th>รุ่นบน board</th>
            <td>{type?.name}</td>
          </tr>
        </tbody>
      </table>
    </Suspense>
  );
}
