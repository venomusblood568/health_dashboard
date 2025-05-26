import ScheduleTable from "../sub_components/booking_cal";

export default function Calender() {
  return (
    <div className="h-full w-full bg-[#F5F9FF] p-6 flex flex-col font-[Nunito]">
      <h1 className="mb-4 p-5">
        <div className="flex gap-4 justify-end">
          <button className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-xl text-2xl shadow-md hover:bg-cyan-500 cursor-pointer">
            👨🏻‍🦱
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-indigo-800 rounded-xl text-white text-2xl shadow-md hover:bg-indigo-500 cursor-pointer">
            +
          </button>
        </div>
      </h1>
      <div className="mb-6">
        <ScheduleTable />
      </div>
      <div>
        <div className="col-span-1 space-y-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#2C329C] text-white p-6 rounded-4xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="flex items-center justify-between font-semibold text-lg mb-1 ">
                Dentist
                <span>🦷</span>
              </h4>
              <p className="text-sm  mb-1 font-medium">09:00 - 11:00</p>
              <p className="text-sm ">Dr. Cameron Williamson</p>
            </div>

            <div className="bg-[#D7DDF6] p-6 rounded-4xl  hover:shadow-lg transition-shadow duration-300 flex-1 text-[#2C329C]">
              <h4 className="flex items-center justify-between font-semibold text-lg mb-1">
                Physiotherapy Appointment
                <span>💪🏻</span>
              </h4>
              <p className="text-sm  mb-1 font-medium">11:00 - 12:00</p>
              <p className="text-sm">Dr. Kevin Djones</p>
            </div>
          </div>
          <span className="flex justify-between items-center font-bold text-2xl mb-4 px-4 text-[#2C329C]">
            The Upcoming Schedule
          </span>
          <h2 className="flex justify-between items-center font-bold text-lg mb-4 px-4 text-[#868993]">
            On Thursday
          </h2>
          <div className="col-span-1 space-y-4">
            {/* Thursday Appointments */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* Health Checkup Card - bigger (70%) */}
              <div
                className="bg-[#D7DDF6] p-6 rounded-4xl hover:shadow-lg transition-shadow duration-300 text-[#2C329C]"
                style={{ width: "60%" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Cardiologist</h4>
                  <span className="text-base">🩹</span>
                </div>
                <p className="text-sm font-medium mt-1">11:00 AM</p>
              </div>

              {/* Ophthalmologist Card - smaller (30%) */}
              <div
                className="bg-[#2C329C] text-white p-6 rounded-4xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                style={{ width: "40%" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-base">Ophthalmologist</h4>
                  <span className="text-lg">👁</span>
                </div>
                <p className="text-sm font-medium mt-1">14:00 PM</p>
              </div>
            </div>
          </div>
          <h2 className="flex justify-between items-center font-bold text-lg mb-4 px-4 text-[#868993]">
            On Saturday
          </h2>
          <div className="col-span-1 space-y-4">
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="bg-[#D7DDF6] p-6 rounded-4xl hover:shadow-lg transition-shadow duration-300 text-[#2C329C]"
                style={{ width: "35%" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Cardiologist</h4>
                  <span className="text-base">❤️</span>
                </div>
                <p className="text-sm font-medium mt-1">12:00 AM</p>
              </div>
              <div
                className="bg-[#2C329C] text-white p-6 rounded-4xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                style={{ width: "35%" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-base">Neurologist</h4>
                  <span className="text-lg">👨‍⚕️</span>
                </div>
                <p className="text-sm font-medium mt-1">16:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
