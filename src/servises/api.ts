const BASE_URL = "http://api.themoviedb.org/3";
const API_KEY = "c5aa44b43c5633067fadb70d50db8005";

export const getMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
}

export const serchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data;
}