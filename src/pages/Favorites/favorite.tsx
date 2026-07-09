import { useMovieContext } from "../../contexts/MoviesContext";
import {MovieCard} from "../../components/MovieCard";


export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="container">
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="main-block">
            {favorites.map((movie:object) => (
                <MovieCard movie={movie} />
            ))}
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;