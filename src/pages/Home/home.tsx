import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { getMovies, serchMovies } from "../../servises/api";
import { type Movie } from "../../types.ts/movie";

function Home() {
  const [movies, setMovie] = useState<Movie[] | null>(null);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const loadedMovie = await getMovies();
        setMovie(loadedMovie.results);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    loadMovie();
  }, []);

  const searchHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    try {
      const searchedMovie = await serchMovies(search);
      setMovie(searchedMovie.results);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="home">
      {error && "Failed to load...."}
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setSearch(e.target.value.trim())}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      <div className="container">
        {movies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
