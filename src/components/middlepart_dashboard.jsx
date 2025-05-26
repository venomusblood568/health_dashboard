import { Search, Bell, ChevronDown } from "lucide-react";

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
    </div>
  );
}
