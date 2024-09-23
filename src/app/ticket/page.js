"use client"; // Make sure this is present for Client Component functionality

import { useState } from "react";
import { FaCouch } from "react-icons/fa"; // Import couch icon

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "reserved" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "reserved" },
    { id: 7, status: "available" },
    { id: 8, status: "available" },
    { id: 9, status: "reserved" },
    { id: 10, status: "available" },
    { id: 11, status: "available" },
    { id: 12, status: "available" },
    { id: 13, status: "reserved" },
    { id: 14, status: "available" },
    { id: 15, status: "available" },
    { id: 16, status: "reserved" },
    { id: 17, status: "available" },
    { id: 18, status: "available" },
    { id: 19, status: "reserved" },
    { id: 20, status: "available" },
  ]);

  const handleSeatSelection = (seatId) => {
    const seat = seats.find((seat) => seat.id === seatId);

    // Prevent selection of reserved seats
    if (seat.status === "reserved") return;

    if (seat.status === "available") {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatId]);
      setSeats(
        seats.map((s) => (s.id === seatId ? { ...s, status: "selected" } : s))
      );
    } else if (seat.status === "selected") {
      // Unselect the seat if already selected
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      setSeats(
        seats.map((s) => (s.id === seatId ? { ...s, status: "available" } : s))
      );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen lg:pt-20">
      <div className="container mx-auto p-4 pt-6">
        <h2 className="text-4xl font-bold text-center mb-10 font-frank">
          SCREEN
        </h2>
        <div className="w-full h-80 relative rounded-full mb-10">
          <svg
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            viewBox="0 0 120 80"
          >
            <path
              d="M0 50s60-60 120 0"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="grid grid-cols-10 gap-2 justify-center px-80">
          {" "}
          {/* Adjust grid columns as needed */}
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`flex items-center justify-center cursor-pointer`}
              onClick={() => handleSeatSelection(seat.id)}
            >
              <FaCouch
                className={`${
                  seat.status === "reserved"
                    ? "text-pink-500"
                    : seat.status === "selected"
                    ? "text-green-500"
                    : "text-white"
                }`}
                size={35}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-10">
          <div className="flex items-center gap-2">
            <FaCouch className="text-white" size={24} />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCouch className="text-pink-500" size={24} />
            <span>Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCouch className="text-green-500" size={24} />
            <span>Selected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
