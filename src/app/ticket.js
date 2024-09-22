// pages/seating-chart.js
import { useState } from "react";

const SeatingChart = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([
    "A1",
    "A5",
    "A9",
    "B2",
    "B6",
    "B10",
    "C3",
    "C7",
    "C11",
  ]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">SCREEN</h2>
      <div className="seating-chart grid grid-cols-12 gap-2">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`A${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`A${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`A${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`B${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`B${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`B${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`C${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`C${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`C${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`D${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`D${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`D${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`E${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`E${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg -blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`E${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`F${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`F${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`F${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`G${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`G${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`G${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`H${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`H${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`H${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`I${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`I${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`I${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`J${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`J${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`J${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`K${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`K${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`K${i + 1}`)}
              />
            )}
          </div>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="seat relative">
            {reservedSeats.includes(`L${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500" />
            ) : selectedSeats.includes(`L${i + 1}`) ? (
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500" />
            ) : (
              <button
                className="w-full h-full bg-white border border-gray-300 rounded"
                onClick={() => handleSeatClick(`L${i + 1}`)}
              />
            )}
          </div>
        ))}
      </div>
      <div className="seat-status mt-4">
        <span className="text-gray-500">Available</span>
        <span className="text-purple-500">Reserved</span>
        <span className="text-blue-500">Selected</span>
      </div>
    </div>
  );
};

export default SeatingChart;
