import { ReactNode } from "react";
import Image from "next/image";

interface LeaderboardLayloutProps {
  children: ReactNode;
}

export default function LeaderboardLayout({
  children,
}: LeaderboardLayloutProps) {
  return (
    <div className="relative h-screen bg-gradient-to-br from-primary from-[35%] to-primary-300">
      <div className="absolute opacity-35 w-[50%] bottom-5 right-5">
        <Image
          src="/images/thuiLogo.png"
          width={1000}
          height={760}
          alt="jaothui logo"
        />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
