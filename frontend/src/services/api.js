// api.js
import axios from 'axios';

const API_URL = 'https://file-sharing-l5lj.onrender.com';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error("Error while calling API:", error.message);
        throw error; 
    }
};

