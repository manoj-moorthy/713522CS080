import axios from 'axios';

const BASE_URL = 'http://third-party-server.com/numbers'; // Replace with actual third-party server URL
const TIMEOUT = 500; // 500 ms timeout

export const fetchNumbers = async (numberId: string): Promise<number[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/${numberId}`, { timeout: TIMEOUT });
        return response.data.numbers || [];
    } catch (error) {
        console.error('Error fetching numbers:', error);
        return [];
    }
};