import { updateUserNameById } from "@/lib/user.action";
import { auth } from "@clerk/nextjs";

export default async function NewNameForm() {
  const { userId } = auth();

  const updateName = updateUserNameById.bind(null, userId as string);
  return (
    <form action={updateName} className="grid grid-col-1 gap-2">
      <div className="form-control">
        <label className="label label-text">กรอกชื่อกรรมการ</label>
        <input
          name="name"
          type="text"
          placeholder="ชื่อ-นามสกุล"
          className={"input input-ghost  bg-slate-200"}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        บันทึก
      </button>
    </form>
  );
}
