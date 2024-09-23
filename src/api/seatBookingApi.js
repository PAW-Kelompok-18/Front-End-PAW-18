// src/api/seatBookingApi.js

import axios from 'axios';

const API_BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : '';

export const seatBookingApi = {
  getSeats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/seat`);
      return response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch seats:', error);
      throw error;
    }
  },

   createTransaction: async (selectedSeatIds) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/transactions`, {
        seats: selectedSeatIds
      });
      return response.data.transaction;
    } catch (error) {
      console.error('Failed to create transaction:', error);
      throw error;
    }
  },

  getUserTransactions: async () => {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data;
  },

  getTransactionById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/${id}`);
    return response.data;
  },

  updateTransactionStatus: async (transactionId) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/transactions/confirm/${transactionId}`, {
        status: 'completed'
      });
      return response.data;
    } catch (error) {
      console.error('Failed to update transaction status:', error);
      throw error;
    }
  },

  deleteTransaction: async (id) => {
    await axios.delete(`${API_BASE_URL}/transactions/${id}`);
  },
};
