import { Search, Bell, ChevronDown, MoveRight} from "lucide-react";
import { Organhealth } from "../sub_components/organs";
import ActivityChart from "../sub_components/activity_chart";

export default function Dashboard() {
  return (
    <div className="h-full w-full p-6 font-[Nunito] text-[#2C329C] space-y-6">
      <div className="mb-4 p-5">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md bg-white">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none text-gray-700"
          />
          <Bell className="w-6 h-6 text-gray-600 ml-3 cursor-pointer" />
        </div>
      </div>
      <span className="flex justify-between items-center font-bold text-4xl mb-4 px-4">
        Dashboard
        <span className="flex items-center gap-1 text-sm font-semibold hover:text-black cursor-pointer">
          This week
          <ChevronDown className="w-4 h-4" />
        </span>
      </span>
      <div className="flex h-[400px] gap-8">
        {/* Left half: Image box */}
        <div className="w-1/2 relative overflow-visible  rounded-md bg-gray-50 flex items-center justify-center">
          <div className="w-96 h-64 relative overflow-visible">
            <img
              src="/body.png"
              alt="Your Image"
              className="absolute left-0 top-[-66px] w-full h-auto object-cover"
              style={{ pointerEvents: "none" }}
            />
          </div>
          <div className="absolute top-2 right-2">
            <Search className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Right half: Vertical cards */}
        <div className="w-1/2 flex flex-col justify-center space-y-4">
          <Organhealth />
          <span className="flex justify-end items-center gap-1 cursor-pointer text-sm font-semibold">
            <span>Details</span>
            <MoveRight />
          </span>
        </div>
      </div>
      <div>
        <ActivityChart />
      </div>
    </div>
  );
}
