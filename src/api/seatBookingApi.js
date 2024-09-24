import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import getCookies from './CookieeHandler';

// Base API URL
const API_BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : '';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include token in headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getCookies(); // Retrieve token from cookies
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const seatBookingApi = {
  getSeats: async () => {
    try {
      const response = await axiosInstance.get('/seat');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch seats:', error);
      throw error;
    }
  },

  createTransaction: async (selectedSeatIds) => {
    toast('Creating transaction...');
    try {
      const response = await axiosInstance.post('/transactions', {
        seats: selectedSeatIds,
      });
      toast.success('Transaction created successfully!', {
        transition: Bounce,
      });
      return response.data.transaction;
    } catch (error) {
      console.error('Failed to create transaction:', error);
      toast.error('Failed to create transaction. Please try again later.');
      throw error;
    }
  },

  getUserTransactions: async () => {
    try {
      const response = await axiosInstance.get('/transactions');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user transactions:', error);
      throw error;
    }
  },

  getTransactionById: async (id) => {
    try {
      const response = await axiosInstance.get(`/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch transaction with ID ${id}:`, error);
      throw error;
    }
  },

  updateTransactionStatus: async () => {
    try {
      const response = await axiosInstance.patch('/transactions/confirm');
      toast.success('Transaction confirmed successfully!');
      return response.data;
    } catch (error) {
      console.error('Failed to update transaction status:', error);
      toast.error(
        'Failed to update transaction status. Please try again later.'
      );
      throw error;
    }
  },

  deleteTransaction: async (id) => {
    try {
      const response = await axiosInstance.delete(`/transactions/${id}`);
      toast.success('Ticket cancelled successfully!');
      return response.data;
    } catch (error) {
      console.error(`Failed to delete transaction with ID ${id}:`, error);
      toast.error('Failed to delete transaction. Please try again later.');
      throw error;
    }
  },
};
