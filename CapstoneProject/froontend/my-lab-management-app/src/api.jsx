import axios from 'axios';

// Set the base URL for all API requests
const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Backend base URL
});

// User registration
export const registerUser = (userData) => API.post('/auth/register', userData);

// User login
export const loginUser = (credentials) => API.post('/auth/login', credentials);

// Get maintenance requests
export const getMaintenance = () => API.get('/maintenance');

// Get inventory data
export const getInventory = () => API.get('/inventory');
