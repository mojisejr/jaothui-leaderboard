import { EventType } from "@/interfaces/event-type";
import {
  createEventName,
  getEventName,
  getTypes,
  setActiveType,
  systemReset,
  uploadBuffaloFile,
} from "@/lib/dashboard-form.action";

import { Suspense } from "react";

export default async function DashboardForm() {
  const event = await getEventName();
  const types = await getTypes();
  const systemResetWithKey = systemReset.bind(null);
  return (
    // create event name
    <div className="grid grid-cols-1 gap-2 max-w-md">
      <form action={createEventName} className="flex gap-2">
        <div className="form-control w-full">
          <input
            name="eventName"
            className="input input-bordered"
            type="text"
            placeholder={event?.name}
          />
        </div>
        <button className="btn btn-primary">ตั้งชื่องาน</button>
      </form>

      {/* add buffalo data */}
      <form action={uploadBuffaloFile} className="flex gap-2">
        <div className="form-control w-full">
          <label className="label label-text">เพิ่มข้อมูลควาย</label>
          <div className="flex justify-between gap-2">
            <input
              name="csv"
              className="file-input file-input-bordered w-full"
              type="file"
              accept="text/csv"
              placeholder="เพิ่มควาย"
            />
            <button className="btn btn-primary">เพิ่ม</button>
          </div>
        </div>
      </form>

      {/* type select */}
      <form action={setActiveType} className="flex gap-2">
        <div className="form-control w-full">
          <label className="label label-text">เลือกรุ่นโชว์บนจอ</label>
          <div className="flex justify-between gap-2">
            <select name="typeId" className="select w-full select-bordered">
              {types?.map((type: EventType) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            <button className="btn btn-primary">เลือก</button>
          </div>
        </div>
      </form>

      {/* system reset */}
      <div className="p-2 border-error border-[1px] bg-error rounded-xl">
        <form action={systemResetWithKey} className="flex gap-2">
          <div className="form-control w-full">
            <label className="label label-text text-white">reset ระบบ</label>
            <div className="flex justify-between gap-2">
              <input
                name="resetKey"
                className="input input-bordered w-full"
                type="password"
                placeholder="รหัส reset"
              />
              <button className="btn btn-error">reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
