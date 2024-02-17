import ScoringForm from "@/app/ui/scoring-form";
import { getBuffaloScoreBoard } from "@/lib/scoring.action";

export default async function BuffaloScoreBoard({
  params,
  searchParams,
}: {
  params: {
    typeId: number;
    buffaloId: number;
    buffaloName: string;
  };
  searchParams: {
    name: string;
  };
}) {
  const { name } = searchParams;
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="text-3xl text-primary">
        กำลังให้คะแนน: <span className="font-bold">{name}</span>
      </div>
      <ScoringForm params={params} />
    </div>
  );
}
