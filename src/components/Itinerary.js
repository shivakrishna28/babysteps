import React from "react";

const itineraryData = [
  { day: "Nov 14th, 2023", details: "Pickup from JKIA airport at 7AM. Drive to Maasai Mara. Afternoon game drive." },
  { day: "Nov 15th, 2023", details: "Early morning game drive, bush breakfast, search for Cheetahs & Topi births." },
  { day: "Nov 16th, 2023", details: "Full-day game drive to the Maasai Mara-Tanzania border (Sand River)." },
  { day: "Nov 17th, 2023", details: "Return journey to Nairobi. Drop at JKIA airport." },
];

function Itinerary() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Itinerary</h2>
      <ul className="space-y-3">
        {itineraryData.map((item, index) => (
          <li key={index} className="border p-3 rounded-md shadow">
            <strong>{item.day}</strong>: {item.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Itinerary;
