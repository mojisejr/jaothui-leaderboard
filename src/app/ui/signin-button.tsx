import { SignInButton } from "@clerk/nextjs";
export default function SignIn() {
  return (
    <SignInButton afterSignInUrl="/">
      <button className="btn btn-primary">เข้าสู่ระบบ</button>
    </SignInButton>
  );
}
