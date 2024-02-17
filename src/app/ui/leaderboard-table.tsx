"use client";
import { getBuffaloScore } from "@/lib/leaderboard.action";
import { clsx } from "clsx";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
export default function LeaderboardTable() {
  const [buffalos, setBuffalo] = useState<any[]>();
  supabase
    .channel("db-changes")
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "Score",
      },
      (payload) => getBuffaloScore().then((buffalos) => setBuffalo(buffalos))
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "Type",
      },
      (payload) => getBuffaloScore().then((buffalos) => setBuffalo(buffalos))
    )
    .subscribe();

  // const buffalos = await getBuffaloScore();
  useEffect(() => {
    getBuffaloScore().then((buffalos) => setBuffalo(buffalos));
  }, []);

  return (
    <div className="grid grid-cols-1 w-full gap-4">
      {buffalos?.length! > 0
        ? buffalos?.map((buffalo, index) => (
            <LeaderCard
              key={index}
              name={buffalo.name}
              no={index + 1}
              score={buffalo.totalScore}
            />
          ))
        : null}
    </div>
  );
}

function LeaderCard({
  name,
  score,
  no,
}: {
  name: string;
  score: number;
  no: number;
}) {
  return (
    <div
      className={clsx(
        "border-[1px] border-primary px-4 py-2 rounded-xl flex items-center justify-between",
        {
          "glass shadow-2xl h-[100px]": no === 1,
          "glass shadow-sm h-[80px]": no === 2,
          "glass h-[60px]": no === 3,
        }
      )}
    >
      <div
        className={clsx("font-bold", {
          "text-[80px]": no === 1,
          "text-[60px]": no === 2,
          "text-[40px]": no === 3,
        })}
      >
        {no}
      </div>
      <div
        className={clsx("font-bold", {
          "text-[80px]": no === 1,
          "text-[60px]": no === 2,
          "text-[40px]": no === 3,
        })}
      >
        {name}
      </div>
      <div
        className={clsx("font-bold", {
          "text-[80px]": no === 1,
          "text-[60px]": no === 2,
          "text-[40px]": no === 3,
        })}
      >
        {score} คะแนน
      </div>
    </div>
  );
}
