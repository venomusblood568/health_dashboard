import {
  LayoutDashboard,
  ArrowUpDown,
  CalendarDays,
  ClipboardPlus,
  ChartLine,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#F5F9FF] p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-[#25CFDD] mb-10 p-5 font-[Nunito]">
          Health<span className="text-[#121651]">care.</span>
        </h1>

        <div className="px-6 font-[Nunito]">
          <span className="text-sm   text-[#DDE1E7] mb-4 block">
            General
          </span>
          <nav className="flex flex-col gap-y-8 mb-10">
            <div className="flex items-center gap-x-4 text-[#121651] cursor-pointer hover:text-[#2e82ff] transition-colors">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-x-4 text-[#A0A5AB] cursor-pointer hover:text-[#2e82ff] transition-colors">
              <ArrowUpDown size={20} />
              <span>History</span>
            </div>
            <div className="flex items-center gap-x-4 text-[#A0A5AB] cursor-pointer hover:text-[#2e82ff] transition-colors">
              <CalendarDays size={20} />
              <span>Calendar</span>
            </div>
            <div className="flex items-center gap-x-4 text-[#A0A5AB] cursor-pointer hover:text-[#2e82ff] transition-colors">
              <ClipboardPlus size={20} />
              <span>Appointments</span>
            </div>
            <div className="flex items-center gap-x-4 text-[#A0A5AB] cursor-pointer hover:text-[#2e82ff] transition-colors">
              <ChartLine size={20} />
              <span>Statistics</span>
            </div>
          </nav>

          <span className="text-sm uppercase tracking-widest text-[#DDE1E7] mb-4 block">
            Tools
          </span>
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-3 text-[#A0A5AB] hover:text-[#2e82ff] cursor-pointer transition-colors">
              <MessageCircleMore size={20} />
              <span>Chat</span>
            </div>
            <div className="flex items-center gap-3 text-[#A0A5AB] hover:text-[#2e82ff] cursor-pointer transition-colors">
              <Phone size={20} />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings at the bottom */}
      <div className="p-5">
        <div className="flex items-center gap-3 text-[#A0A5AB] hover:text-[#2e82ff] cursor-pointer transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
