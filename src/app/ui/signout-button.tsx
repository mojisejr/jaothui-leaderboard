import { SignOutButton } from "@clerk/nextjs";
export default function SignOut() {
  return (
    <SignOutButton>
      <button className="btn btn-primary w-full">ออกจากระบบ</button>
    </SignOutButton>
  );
}
