import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
console.log(apiUrl);

export const fetchData = async () => {
  const response = await axios.get(`${apiUrl}?results=6`);
  return response.data;
};
