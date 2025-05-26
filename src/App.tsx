
import Sidebar from "./components/sidebar";
import Dashboard from "./components/middlepart_dashboard";
import Calender from "./components/lastpart_calender";

export default function App(){
  return (
    <div className="flex w-full min-h-screen bg-[#FFFFFF] font-sans text-[#1a1a1a]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 gap-4">
        <div className="w-[47%]">
          <Dashboard />
        </div>
        <div className="w-[53%]">
          <Calender />
        </div>
      </div>
    </div>
  );
}