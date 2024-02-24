import Header from "@/app/components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";
import { getFeaturedMovies } from "./service/MovieService";

export default async function Home() {
  const featuredMovie = await getFeaturedMovies("104");

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[190vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle="Trending Now" />
        <MovieRow sectionTitle="Top Rated" />
        <MovieRow sectionTitle="Action Movies" />
      </main>
    </div>
  );
}
