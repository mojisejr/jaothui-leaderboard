"use client";
import { usePathname } from "next/navigation";
export default function NavbarTitle() {
  const pathname = usePathname();
  const type = pathname.split("/type-select") ?? null;
  const score = type.length! <= 0 ? null : type[1]?.split("/");

  function setPathname() {
    switch (pathname) {
      case "/":
        return "Jaothui Leaderboard";
        break;
      case "/dashboard":
        return "ตั้งค่างานประกวด";
        break;
      case "/type-select":
        return "เลือกรุ่นการประกวด";
        break;
      case `/type-select/${score![1]}`:
        return "เลือกควายที่เข้าประกวด";
        break;
      case `/type-select/${score![1]}/${score![2]}`:
        return "ให้คะแนนควายที่เค้าประกวด";
        break;
      default:
        return "Jaothui Leaderboard";
        break;
    }
  }

  return <div className="text-2xl font-bold">{setPathname()}</div>;
}
