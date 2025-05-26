import { MoveLeft, MoveRight } from "lucide-react";

export default function ScheduleTable() {
  return (
    <div className="text-[#2C329C] w-full max-w-4xl mx-auto">
      <span className="flex justify-between items-center font-bold text-2xl mb-4 px-4">
        October 2021
        <span className="flex gap-5">
          <MoveLeft className="text-[#2C329C]" />
          <MoveRight className="text-[#2C329C]" />
        </span>
      </span>
      <table className="w-full border-collapse text-center text-[#2C329C]">
        <thead>
          <tr>
            <th className="p-2 bg-gray-50">Mon</th>
            <th className="p-2 bg-[#E8F0FC] rounded-t-3xl font-bold">Tues</th>
            <th className="p-2 bg-gray-50">Wed</th>
            <th className="p-2 bg-gray-50">Thurs</th>
            <th className="p-2 bg-gray-50">Fri</th>
            <th className="p-2 bg-gray-50">Sat</th>
            <th className="p-2 bg-gray-50 text-[#929A9E]">Sun</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-2xl font-bold">
            <td className="p-2">25</td>
            <td className="p-2 bg-[#E8F0FC] font-semibold">26</td>
            <td className="p-2">27</td>
            <td className="p-2">28</td>
            <td className="p-2">29</td>
            <td className="p-2">30</td>
            <td className="p-2 text-[#929A9E]">31</td>
          </tr>

          <tr>
            <td className="p-2">10:00</td>
            <td className="p-2 bg-[#E8F0FC] font-semibold">08:00</td>
            <td className="p-2">12:00</td>
            <td className="p-2">10:00</td>
            <td className="p-2">—</td>
            <td className="p-0">
              <span className="px-4 py-2 rounded-l-xl text-white bg-[#A1A9CC] relative inline-block">
                12:00
                <span className="block w-2 h-2 bg-white rounded-full mx-auto mt-1"></span>
              </span>
            </td>
            <td className="p-0">
              <span className="px-4 py-2 rounded-r-xl text-white bg-[#A1A9CC] relative inline-block">
                09:00
                <span className="block w-2 h-2 bg-white rounded-full mx-auto mt-1"></span>
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2">11:00</td>
            <td className="p-2 bg-[#E8F0FC] font-semibold">
              <span className="px-4 py-2 rounded-xl text-white bg-[#2C329C]">
                09:00
              </span>
            </td>
            <td className="p-2">—</td>
            <td className="p-2">
              <span className="px-4 py-2 rounded-xl text-white bg-[#A1A9CC] relative inline-block">
                11:00
                <span className="block w-2 h-2 bg-white rounded-full mx-auto"></span>
              </span>
            </td>
            <td className="p-2">14:00</td>
            <td className="p-2">14:00</td>
            <td className="p-2 text-[#929A9E]">10:00</td>
          </tr>

          <tr>
            <td className="p-2">12:00</td>
            <td className="p-2 rounded-b-3xl bg-[#E8F0FC] font-semibold">
              10:00
            </td>
            <td className="p-2">13:00</td>
            <td className="p-2">—</td>
            <td className="p-2">16:00</td>
            <td className="p-2">15:00</td>
            <td className="p-2 text-[#929A9E]">11:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
