import { GoDotFill } from "react-icons/go";
export default function DashboardHowTo() {
  return (
    <div className="p-4 bg-base-200 rounded-xl max-w-md">
      <h3 className="text-xl font-bold text-primary">วิธีการใช้งาน</h3>
      <ul>
        <li className="flex items-center gap-2">
          <GoDotFill size={16} />
          <div>ตั้งชื่องาน</div>
        </li>
        <li className="flex items-center gap-2">
          <GoDotFill size={16} />
          <div>upload ข้อมูลควายไฟล์​ .csv ระบบ หารุ่นให้อัตโนมัติ</div>
        </li>
        <li className="flex items-center gap-2">
          <GoDotFill size={16} />
          <div>เลือกรุ่นที่ จะโชว์บนจอ leaderboard</div>
        </li>
        <li className="flex items-center gap-2">
          <GoDotFill size={16} />
          <div>จบงานแล้วให้มา reset ระบบที่นี่</div>
        </li>
      </ul>
    </div>
  );
}
