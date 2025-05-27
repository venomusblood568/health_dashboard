export function Organhealth(){
    return (
      <>
        <div className="w-full  grid grid-cols-1 gap-4">
          {[
            {
              emoji: "🫁",
              label: "Lungs",
              date: "26 Oct 2021",
              value: 80,
              color: "#A94447",
            },
            {
              emoji: "🦷",
              label: "Teeth",
              date: "26 Oct 2021",
              value: 80,
              color: "#6CCDB8",
            },
            {
              emoji: "🦴",
              label: "Bone",
              date: "26 Oct 2021",
              value: 80,
              color: "#FE725A",
            },
          ].map(({ emoji, label, date, value, color }) => (
            <div key={label} className="bg-[#F5F9FF] p-4 rounded-xl shadow">
              <div className="text-xl font-semibold mb-2">
                <span className="text-3xl mr-2">{emoji}</span> {label}
              </div>
              <div className="text-sm text-gray-500 mb-2">Date: {date}</div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{ width: `${value}%`, backgroundColor: color }}
                />
              </div>
            </div>
            
          ))}
        </div>
      </>
    );
}