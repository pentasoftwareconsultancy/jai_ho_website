import axios from "axios";

const API_URL = "http://localhost:3008/api/story"; // Ensure this is correct

// ✅ Fetch all Kathas
export const getKathas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return { error: "Failed to fetch kathas." };
  }
};
export const getKathaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching katha with id ${id}:`, error);
    return { error: "Failed to fetch katha by ID." };
  }
};