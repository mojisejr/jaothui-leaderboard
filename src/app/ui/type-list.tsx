import { EventType } from "@/interfaces/event-type";
import { getTypes } from "@/lib/dashboard-form.action";
import Link from "next/link";

export default async function TypeList() {
  const types = await getTypes();
  return (
    <div className="grid grid-col-1 gap-2">
      {types?.map((type: EventType) => (
        <Link
          href={`/type-select/${type.id}`}
          className="btn btn-primary w-full"
        >
          {type.name}
        </Link>
      ))}
    </div>
  );
}
