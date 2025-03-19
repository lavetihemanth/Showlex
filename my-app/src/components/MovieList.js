import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        movies && (
        <div className="py-4 px-2">
            <h1 className="text-xl py-3 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard key={movie?.id} title={movie?.title} posterPath={movie?.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
        )
    );
};

export default MovieList;