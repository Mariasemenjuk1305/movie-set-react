import type { Movie } from '../types.ts/movie' 
import {useMovieContext} from '../contexts/MoviesContext'


interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie } : MovieCardProps) => {
    const {isFavorites, addToFavorites, removeFromFavorites} = useMovieContext();

    const favorite = isFavorites(movie.id)
    
    function onFavoriteClick(){
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <button className={ `btn ${favorite ? 'active' : '' }`} onClick={() => onFavoriteClick()}>❤</button>
            </div>
            <div className='movie-info'>
                <p className='movie-name'>{movie.title}</p>
                <p className='relise-date'>{movie.release_date}</p>
                <p className='movie-description'>{movie.overview}</p>
            </div>
        </div>
    )
}
