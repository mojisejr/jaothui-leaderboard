"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const { back } = useRouter();
  return (
    <button
      className={`${className ?? ""} btn btn-primary flex items-center gap-2`}
      onClick={back}
    >
      <IoArrowBackOutline size={24} /> <span>กลับ</span>
    </button>
  );
}
