"use server";

import { Buffalo } from "@prisma/client";
import { getActiveType } from "./dashboard-form.action";
import { prisma } from "./prisma";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { BuffaloWithScore } from "@/interfaces/buffalo-with-score";

export async function getBuffaloScore() {
  noStore();
  try {
    const activeType = await getActiveType();
    const buffalos = await prisma.buffalo.findMany({
      where: {
        typeId: activeType?.id,
      },
      include: {
        type: true,
        Score: true,
      },
    });

    const scoreCalculated = buffalos.map((buffalo: BuffaloWithScore) => {
      const totalScore = buffalo.Score.map(
        (score) =>
          score.back + score.body + score.head + score.horn + score.neck
      ).reduce((a, b) => a + b, 0);
      return { ...buffalo, totalScore };
    });

    return scoreCalculated;
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/leaderboard");
}

export async function getBuffalosByTypeId(typeId: number) {
  try {
    const buffalos = await prisma.buffalo.findMany({
      where: {
        typeId: +typeId,
      },
      include: {
        Score: true,
        type: true,
      },
    });

    const buffaloWithTotalScore = buffalos.map((buffalo: BuffaloWithScore) => {
      const totalScore =
        buffalo.Score.length <= 0
          ? 0
          : buffalo.Score.map(
              (score) =>
                score.head + score.neck + score.body + score.back + score.horn
            ).reduce((a, b) => a + b, 0);
      return {
        ...buffalo,
        totalScore,
      };
    });

    return buffaloWithTotalScore;
  } catch (error) {
    console.log(error);
  }
}
