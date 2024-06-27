mport axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchBuses = () => api.get('/buses');
export const fetchBusById = (id) => api.get(`/buses/${id}`);
export const bookBus = (bookingData) => api.post('/bookings', bookingData);
export const loginUser = (credentials) => api.post('/users/login', credentials);
export const registerUser = (userData) => api.post('/users/register', userData);

export default api;
