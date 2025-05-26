import React from "react";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#FFFFFF] font-sans text-[#1a1a1a]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      
    </div>
  );
};

export default App;
