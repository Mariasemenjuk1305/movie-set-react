import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const favotiteMovies = sessionStorage.getItem("favorites")

        if (favotiteMovies) setFavorites(JSON.parse(favotiteMovies))
    }, [])

    useEffect(() => {
        sessionStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites, 
        removeFromFavorites,
        isFavorites
    }

  return <MovieContext.Provider value={value}>
    {children}
    </MovieContext.Provider>;
};
