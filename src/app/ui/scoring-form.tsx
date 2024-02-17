import { getBuffaloScoreBoard, updateScore } from "@/lib/scoring.action";
import { getUserByUserId } from "@/lib/user.action";
import { auth } from "@clerk/nextjs";

export default async function ScoringForm({
  params,
}: {
  params: {
    typeId: number;
    buffaloId: number;
  };
}) {
  const { userId } = auth();
  const user = await getUserByUserId(userId!);
  const buffaloScore = await getBuffaloScoreBoard(
    +params.buffaloId,
    user?.id!,
    1,
    params.typeId
  );

  const updateScoreWithParams = updateScore.bind(null, {
    commiteeId: user?.id!,
    buffaloId: +params.buffaloId,
    typeId: +params.typeId,
  });

  return (
    <table className="table min-w-[500px]">
      <thead>
        <tr className="text-center">
          <th>ตำแหน่ง</th>
          <th>คะแนน</th>
        </tr>
      </thead>
      <tbody>
        <tr className="body">
          <th>ลำตัว</th>
          <td>
            <form
              action={updateScoreWithParams}
              className="flex justify-center items-center gap-4"
            >
              <button
                name="dec"
                value="body"
                className="btn btn-circle btn-error"
              >
                ลด
              </button>
              <div className="text-primary font-bold text-xl">
                {buffaloScore.body}
              </div>
              <button
                name="inc"
                value="body"
                className="btn btn-circle btn-info"
              >
                เพิ่ม
              </button>
            </form>
          </td>
        </tr>
        <tr className="head">
          <th>หัว</th>
          <td>
            <form
              action={updateScoreWithParams}
              className="flex justify-center items-center gap-4"
            >
              <button
                name="dec"
                value="head"
                className="btn btn-circle btn-error"
              >
                ลด
              </button>
              <div className="text-primary font-bold text-xl">
                {buffaloScore.head}
              </div>
              <button
                name="inc"
                value="head"
                className="btn btn-circle btn-info"
              >
                เพิ่ม
              </button>
            </form>
          </td>
        </tr>
        <tr className="neck">
          <th>คอ</th>
          <td>
            <form
              className="flex justify-center items-center gap-4"
              action={updateScoreWithParams}
            >
              <button
                name="dec"
                value="neck"
                className="btn btn-circle btn-error"
              >
                ลด
              </button>
              <div className="text-primary font-bold text-xl">
                {buffaloScore.neck}
              </div>
              <button
                name="inc"
                value="neck"
                className="btn btn-circle btn-info"
              >
                เพิ่ม
              </button>
            </form>
          </td>
        </tr>
        <tr className="horn">
          <th>เขา</th>
          <td>
            <form
              className="flex justify-center items-center gap-4"
              action={updateScoreWithParams}
            >
              <button
                name="dec"
                value="horn"
                className="btn btn-circle btn-error"
              >
                ลด
              </button>
              <div className="text-primary font-bold text-xl">
                {buffaloScore.horn}
              </div>
              <button
                name="inc"
                value="horn"
                className="btn btn-circle btn-info"
              >
                เพิ่ม
              </button>
            </form>
          </td>
        </tr>
        <tr className="back">
          <th>หลัง</th>
          <td>
            <form
              className="flex justify-center items-center gap-4"
              action={updateScoreWithParams}
            >
              <button
                name="dec"
                value="back"
                className="btn btn-circle btn-error"
              >
                ลด
              </button>
              <div className="text-primary font-bold text-xl">
                {buffaloScore.back}
              </div>
              <button
                name="inc"
                value="back"
                className="btn btn-circle btn-info"
              >
                เพิ่ม
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
