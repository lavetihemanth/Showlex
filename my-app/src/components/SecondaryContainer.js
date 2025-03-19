import ShowsList from "./ShowsList";
import TopRatedShows from "./TopRatedShows";


const SecondaryContainer = ({allShowsData}) => {

    const sortHighRatedShows = (shows) => {
        const showsCopy = [...shows];
        const sortedShows = showsCopy.sort((a, b) => b?.rating?.average - a?.rating?.average);
        const topRatedShows = sortedShows.slice(0, 10);
        return topRatedShows;
    }
    const highRatedShows = sortHighRatedShows(allShowsData);
    return (
        allShowsData && (
        <div className="w-full bg-zinc-900">
            <div className="-mt-7 xs:-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-32 xl:mt-[-180px] mx-auto relative z-20">
                <TopRatedShows showsData={highRatedShows} showsTitle={"All Time Popular Shows"} />
                <ShowsList showsData={allShowsData} showsTitle={"All Shows"} />
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;