import Header from "../components/Header";
import { MovieCard } from "../components/MovieCard";
import { searchMovies } from "../service/MovieService";

interface ISearchParams {
  title?: string;
  genre?: string;
}

interface ISearchProps {
  searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams }: ISearchProps) {
  const { title, genre } = searchParams;

  const movies = await searchMovies(title, genre);

  if (movies.length === 0) {
    return (
      <div>
        <div className="relative bg-gradient-to-b pb-8">
          <Header />
          <main className="relative mb-48 mt-20 h-screen pl-4 lg:pl-16">
            <h1 className="text-2xl font-bold mb-4">
              Search Results for: <span className="text-red-500">{title}</span>
            </h1>
            <p className="text-xl">No movies found</p>
          </main>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="relative bg-gradient-to-b pb-8">
        <Header />
        <main className="relative mb-48 mt-20 h-screen pl-4 lg:pl-16">
          <h1 className="text-2xl font-bold mb-4">
            Search Results for: <span className="text-red-500">{title}</span>
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
