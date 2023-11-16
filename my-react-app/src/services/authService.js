// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://admin.gifinfinity.com/accounts/api/client/v1';

const authService = {
  loginUser: async (phone, otp) => {
    try {
      const response = await axios.post(`${API_URL}/user-otp-login/`, {
        phone,
        otp,
      });
      return response.data.token;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
