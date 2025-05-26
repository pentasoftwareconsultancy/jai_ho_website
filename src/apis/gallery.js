import axios from "axios";

const API_URL = "http://localhost:3007/api/gallery";

export const getGallery = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Gallery:", error);
    return { error: "Failed to fetch Gallery." };
  }
};