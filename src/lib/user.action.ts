"use server";
import { prisma } from "./prisma";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function getUserByUserId(userId: string) {
  noStore();
  try {
    const user = await prisma.commitee.findFirst({
      where: {
        userId,
      },
    });
    revalidatePath("/");
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateUserNameById(userId: string, formData: FormData) {
  noStore();
  const name = formData.get("name") as string;
  try {
    const updated = await prisma.commitee.update({
      where: { userId },
      data: {
        name,
      },
    });

    revalidatePath("/");
    return updated;
  } catch (error) {
    console.log(error);
    return null;
  }
}
