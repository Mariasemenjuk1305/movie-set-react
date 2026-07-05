import type { Movie } from '../types.ts/movie' 

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie } : MovieCardProps) => {

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.Poster} alt={movie.Title} />
                <button>❤</button>
            </div>
            <div className='movie-info'>
                <p className='relise-date'>{movie.Released}</p>
                <p className='movie-description'>{movie.Plot}</p>
            </div>
        </div>
    )
}
