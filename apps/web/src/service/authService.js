import apiClient from "../config/apiClient";

const authService = {
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await apiClient.post('/users/signup', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  getUser: async () => {
    try {
      const response = await apiClient.get('/auth/user');
      return response.data;
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  },
};

export default authService;
