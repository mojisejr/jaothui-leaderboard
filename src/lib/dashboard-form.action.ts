"use server";
import { prisma } from "./prisma";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import csvtojson from "csvtojson";

type CompetitionType = {
  id: number;
  name: string;
  description?: string;
};

type Buffalo = {
  id?: number;
  microchip: string;
  name: string;
  typeId: number;
};

export async function createEventName(formData: FormData) {
  noStore();
  const name = formData.get("eventName") as string;
  try {
    const created = await prisma.competition.upsert({
      where: {
        id: 1,
      },
      create: { id: 1, name },
      update: {
        id: 1,
        name,
      },
    });
    revalidatePath("/dashboard");
    revalidatePath("/leaderboard");
    return created;
  } catch (error) {
    console.log(error);
  }
}

export async function getEventName() {
  try {
    const eventName = await prisma.competition.findFirst();
    return eventName ?? { name: "ยังไม่ได้ตั้งชื่อ" };
  } catch (error) {
    console.log(error);
  }
}

export async function uploadBuffaloFile(formData: FormData) {
  //clear all old data
  await clearBuffalos();
  await clearTypes();
  //read new data
  const file = formData.get("csv") as File;
  const txt = await file.text();
  const csv = await csvtojson().fromString(txt);

  //check if data is available
  if (csv.length <= 0) {
    return;
  }

  //read types
  const types = csv
    .map((data, index) => data.type.toLowerCase())
    .filter(onlyUnique)
    .map((data, index) => {
      return {
        name: data,
        id: index + 1,
      };
    });

  //read buffalos
  const buffalos = csv.map((data) => {
    return {
      microchip: data.microchip,
      name: data.name,
      typeId:
        types.find((type) => type.name === data.type.toLowerCase())?.id ?? 0,
    };
  });

  //save to supabase
  await addTypes(types);
  await addBuffalos(buffalos);

  revalidatePath("/dashboard");
  revalidatePath("/leaderboard");
}

export async function addBuffalos(buffalos: Buffalo[]) {
  try {
    const result = await prisma.buffalo.createMany({ data: buffalos });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getTypes() {
  try {
    const types = await prisma.type.findMany({ where: { isActive: false } });
    return types;
  } catch (error) {
    console.log(error);
  }
}

export async function getActiveType() {
  try {
    const activeType = await prisma.type.findFirst({
      where: { isActive: true },
    });
    return activeType;
  } catch (error) {
    console.log(error);
  }
}

export async function addTypes(types: CompetitionType[]) {
  try {
    const createdTypes = await prisma.type.createMany({ data: types });
    return createdTypes.count ?? 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function clearTypes() {
  try {
    const deleted = await prisma.type.deleteMany();
    return deleted.count ?? 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function setActiveType(formData: FormData) {
  noStore();
  const typeId = formData.get("typeId") as string;
  try {
    await prisma.type.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });
    await prisma.type.update({
      where: { id: +typeId },
      data: { isActive: true },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard");
  revalidatePath("/leaderboard");
}

export async function clearBuffalos() {
  try {
    const deleted = await prisma.buffalo.deleteMany();
    return deleted.count ?? 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function systemReset(formData: FormData) {
  noStore();
  const resetKey = formData.get("resetKey");
  if (process.env.RESET_KEY === resetKey) {
    await Promise.all([
      prisma.competition.deleteMany(),
      prisma.buffalo.deleteMany(),
      prisma.score.deleteMany(),
      prisma.type.deleteMany(),
    ]);
  }
  revalidatePath("/dashboard");
}

function onlyUnique(value: any, index: any, array: any[]) {
  return array.indexOf(value) === index;
}
