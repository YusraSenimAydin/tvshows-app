import axios from "axios";

const API_URL = "https://api.tvmaze.com";

export const getShowsByGenre = async (genre) => {
  try {
    const response = await axios.get(`${API_URL}/shows`);
    return response.data.filter((show) => show.genres.includes(genre));
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const getShowDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const searchShowsAPI = async (query, genre = "") => {
  try {
    const response = await axios.get(`${API_URL}/search/shows?q=${query}`);
    return response.data
      .filter((item) => (genre ? item.show.genres.includes(genre) : true))
      .map((item) => item.show);
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const getHighRatedShows = async () => {
  try {
    const response = await axios.get(`${API_URL}/shows`);
    return response.data.filter((show) => show.rating.average >= 7);
  } catch (error) {
    console.error("API Hatası:", error);
    return [];
  }
};
