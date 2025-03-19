import { useSelector } from "react-redux";
import EpisodeList from "./EpisodeList";


const SeasonItem = ({ seasonData }) => {

  const episodesData = useSelector((store) => store?.shows?.singleShow?._embedded?.episodes);
  return (
    <section className="text-left">
      <h3 className="text-sm text-gray-300">{seasonData?.episodeOrder !== null ? seasonData?.episodeOrder: "0"} Episodes</h3>
      {episodesData && (
        <EpisodeList seasonNum={seasonData?.number} episodesData={episodesData} />
      )}
    </section>
  )
}

export default SeasonItem;