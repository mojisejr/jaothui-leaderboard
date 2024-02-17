"use server";

import { prisma } from "./prisma";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function updateScore(
  {
    commiteeId,
    buffaloId,
    typeId,
  }: { commiteeId: number; buffaloId: number; typeId: number },
  formData: FormData
) {
  noStore();
  const dec = formData.get("dec");
  const inc = formData.get("inc");

  if (dec) {
    switch (dec) {
      case "body": {
        await prisma.score.updateMany({
          data: {
            body: {
              decrement: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      }
      case "head":
        await prisma.score.updateMany({
          data: {
            head: {
              decrement: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "neck":
        await prisma.score.updateMany({
          data: {
            neck: {
              decrement: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "horn":
        await prisma.score.updateMany({
          data: {
            horn: {
              decrement: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "back":
        await prisma.score.updateMany({
          data: {
            back: {
              decrement: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      default:
        break;
    }
  }

  if (inc) {
    switch (inc) {
      case "body": {
        await prisma.score.updateMany({
          data: {
            body: {
              increment: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      }
      case "head":
        await prisma.score.updateMany({
          data: {
            head: {
              increment: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "neck":
        await prisma.score.updateMany({
          data: {
            neck: {
              increment: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "horn":
        await prisma.score.updateMany({
          data: {
            horn: {
              increment: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      case "back":
        await prisma.score.updateMany({
          data: {
            back: {
              increment: 1,
            },
          },
          where: { commiteeId, buffaloId },
        });
        revalidatePath("/leaderboard");
        revalidatePath(`/type-select/${typeId}/${buffaloId}`);
        break;
      default:
        break;
    }
  }
}

export async function getBuffaloScoreBoard(
  buffaloId: number,
  commiteeId: number,
  competitionId: number,
  typeId: number
) {
  noStore();
  const found = await prisma.score.findFirst({
    where: {
      buffaloId,
      commiteeId,
      competitionId,
    },
  });

  if (!found) {
    const created = await prisma.score.create({
      data: {
        buffaloId,
        commiteeId,
        competitionId,
        head: 0,
        neck: 0,
        body: 0,
        horn: 0,
        back: 0,
      },
    });
    revalidatePath("/leaderboard");
    revalidatePath(`/type-select/${typeId}/${buffaloId}`);
    return created;
  } else {
    revalidatePath(`/type-select/${typeId}/${buffaloId}`);
    revalidatePath("/leaderboard");
    return found;
  }
}
