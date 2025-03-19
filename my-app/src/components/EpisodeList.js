import EpisodeItem from "./EpisodeItem";


const EpisodeList = ({seasonNum, episodesData}) => {

    const filteredEpisodes = episodesData?.filter(
        (episode) => episode?.season === seasonNum
    );
    console.log(filteredEpisodes);
  return (
    <div className="py-5">
        {filteredEpisodes.map((episode) => {
            return (
                <EpisodeItem key={episode?.id} episodeDetails={episode}/>
            )
        })}
    </div>
  )
}

export default EpisodeList