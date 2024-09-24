"use client";
import React, { useState, useEffect } from 'react';
import { FaCouch } from 'react-icons/fa';
import { seatBookingApi } from '../../api/seatBookingApi';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getCookie from '../../api/CookieeHandler';
import { Cookie } from 'next/font/google';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const token = getCookie();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        // const seatData = await seatBookingApi.getSeats();
        // withCredentials: true
        const seatData = await seatBookingApi.getSeats();
        setSeats(seatData);
      } catch (error) {
        console.error('Failed to fetch seats', error);
      }
    };

    fetchSeats();
  }, []);

  const handleSeatSelection = (seatId) => {
    const seat = seats.find((seat) => seat._id === seatId);

    if (seat.status === 'booked' || seat.status === 'inTransaction') return;

    if (seat.status === 'available') {
      setSelectedSeats([...selectedSeats, seatId]);
      setSeats(
        seats.map((s) => (s._id === seatId ? { ...s, status: 'selected' } : s))
      );
    } else if (seat.status === 'selected') {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      setSeats(
        seats.map((s) => (s._id === seatId ? { ...s, status: 'available' } : s))
      );
    }
  };

  const handleBooking = async () => {
    try {
      const transaction = await seatBookingApi.createTransaction(selectedSeats);
      setCurrentTransaction(transaction);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  const confirmBooking = async () => {
    try {
      if (!currentTransaction) {
        console.error('No current transaction');
        return;
      }

      await seatBookingApi.updateTransactionStatus();

      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          selectedSeats.includes(seat._id)
            ? { ...seat, status: 'booked' }
            : seat
        )
      );

      setSelectedSeats([]);
      setIsModalOpen(false);
      setCurrentTransaction(null);
    } catch (error) {
      console.error('Error booking seats:', error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 lg:pt-[100px] lg:px-[120px] overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="w-full h-20 bg-gray-800 rounded-t-full mb-10"></div>
      <div className="w-full max-w-4xl mx-auto p-4 bg-gray-900 rounded-lg">
        <div className="grid grid-cols-10 gap-4">
          {seats.map((seat) => (
            <div
              key={seat._id}
              className="cursor-pointer"
              onClick={() => handleSeatSelection(seat._id)}
            >
              <FaCouch
                className={`${
                  seat.status === 'booked'
                    ? 'text-pink-500'
                    : seat.status === 'inTransaction'
                    ? 'text-red-500'
                    : seat.status === 'selected'
                    ? 'text-green-500'
                    : 'text-white'
                }`}
                size={24}
              />
              <span className="text-xs">{seat.seatNumber}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <div className="flex items-center gap-2">
          <FaCouch className="text-white" size={24} />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCouch className="text-pink-500" size={24} />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCouch className="text-green-500" size={24} />
          <span>Your Selection</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCouch className="text-red-500" size={24} />
          <span>In Transaction</span>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBooking}
          disabled={selectedSeats.length === 0}
        >
          Book Selected Seats
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-black-B bg-opacity-90 text-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-lg"
            >
              &times;
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold">Niki Concert</h2>
              <p className="text-gray-400 my-2">Istora Senayan</p>
              <p className="text-gray-400 mb-4">
                22 Desember 2022, 20:00 - ends
              </p>
              <p className="mb-6">
                You have selected {selectedSeats.length} seat(s) for the NIKI
                Concert. Are you sure you want to confirm the booking?
              </p>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={confirmBooking}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatBooking;
