'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Music } from 'lucide-react';
import axios from 'axios';

export default function EventDashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const testhardcode = [
    {
      _id: '1',
      status: 'completed',
      seats: [
        {
          number: 'A1',
          event: {
            title: 'Sample Concert',
            date: '2023-09-30T20:00:00Z',
            location: 'Sample Venue',
          },
        },
      ],
    },
  ];

  useEffect(() => {
    setTransactions(testhardcode);
    setLoading(false);
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  const completedTransactions = transactions.filter(
    (t) => t.status === 'completed'
  );

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-2">Welcome back,</h1>
      <p className="text-gray-400 text-center mb-8">
        {completedTransactions.length > 0
          ? 'Take a look at all of your tickets.'
          : "You don't have any tickets yet."}
      </p>

      {completedTransactions.length > 0 ? (
        <>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full">
              <span className="mr-2">All Tickets</span>
              <span className="bg-white text-indigo-600 px-2 py-1 rounded-full text-xs">
                {completedTransactions.length}
              </span>
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
              <Music className="inline mr-2" size={16} />
              <span className="mr-2">Concerts</span>
              <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs">
                {completedTransactions.length}{' '}
                {/* Assuming all are concerts for simplicity */}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedTransactions.map((transaction) => (
              <div key={transaction._id} className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {transaction.seats[0]?.event?.title ||
                    'Event Title Not Available'}
                </h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <Calendar className="mr-2" size={16} />
                  <span>
                    {transaction.seats[0]?.event?.date
                      ? new Date(
                          transaction.seats[0].event.date
                        ).toLocaleDateString()
                      : 'Date Not Available'}
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    {transaction.seats[0]?.event?.date
                      ? new Date(
                          transaction.seats[0].event.date
                        ).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : 'Time Not Available'}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="mr-2" size={16} />
                  <span>
                    {transaction.seats[0]?.event?.location ||
                      'Location Not Available'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-pink-500">
                    Seat Numbers:{' '}
                    {transaction.seats.map((seat) => seat.number).join(', ') ||
                      'Not Available'}
                  </span>
                  <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs">
                    {transaction.seats.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-8">
          <p>Looks like you haven't purchased any tickets yet.</p>
          <p>Check out our upcoming events and get your tickets today!</p>
        </div>
      )}
    </div>
  );
}
