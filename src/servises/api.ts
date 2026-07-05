const BASE_URL = "https://www.omdbapi.com/?i=tt3896198";
const API_KEY = "4f4224d7";

export const getMovies = async () => {
    const response = await fetch(`${BASE_URL}&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
}

export const serchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}&apikey=${API_KEY}&t=${query}`);
    const data = await response.json();
    return data;
}