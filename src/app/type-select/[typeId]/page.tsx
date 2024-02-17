import { BuffaloWithScore } from "@/interfaces/buffalo-with-score";
import { getBuffalosByTypeId } from "@/lib/leaderboard.action";
import Link from "next/link";

export default async function TypeDetail({
  params,
}: {
  params: { typeId: number };
}) {
  const { typeId } = params;
  const buffalos = await getBuffalosByTypeId(typeId);
  const titleName = buffalos![0].type.name ?? "";

  return (
    <div className="my-6 flex w-full justify-center flex-col items-center gap-6">
      <div className="text-2xl font-bold text-primary">รุ่น {titleName}</div>
      <table className="table max-w-xl overflow-y-scroll">
        <thead>
          <tr>
            <th>ชื่อควาย</th>
            <th>ส่วนหัว</th>
            <th>ลำคอ</th>
            <th>ลำตัว</th>
            <th>ส่วนเขา</th>
            <th>หลัง</th>
            <th>รวม</th>
            <th>ลงคะแนน</th>
          </tr>
        </thead>
        <tbody>
          {buffalos?.length! <= 0 ?? 0 ? (
            <div>ไม่มีข้อมูล</div>
          ) : (
            buffalos?.map((buffalo: BuffaloWithScore) => (
              <tr className="hover:bg-primary hover:cursor-pointer hover:text-white">
                <td>{buffalo.name}</td>
                <td>
                  {buffalo.Score.map((score) => score.head).reduce(
                    (a, b) => a + b,
                    0
                  )}
                </td>
                <td>
                  {buffalo.Score.map((score) => score.neck).reduce(
                    (a, b) => a + b,
                    0
                  )}
                </td>
                <td>
                  {buffalo.Score.map((score) => score.body).reduce(
                    (a, b) => a + b,
                    0
                  )}
                </td>
                <td>
                  {buffalo.Score.map((score) => score.horn).reduce(
                    (a, b) => a + b,
                    0
                  )}
                </td>
                <td>
                  {buffalo.Score.map((score) => score.back).reduce(
                    (a, b) => a + b,
                    0
                  )}
                </td>
                <td className="font-bold">{buffalo.totalScore}</td>
                <td className="font-bold">
                  <Link
                    className="btn btn-xs btn-primary"
                    href={`/type-select/${typeId}/${buffalo.id}?name=${buffalo.name}`}
                  >
                    ลงคะแนน
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
