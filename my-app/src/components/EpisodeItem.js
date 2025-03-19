

const EpisodeItem = ({ episodeDetails }) => {
    const cleanText = episodeDetails?.summary?.replace(/<\/?[^>]+(>|$)/g, "");
    return (
      <article className="grid grid-cols-8 gap-x-8 py-4 border-t-[1px] border-t-[#262626]">
        <div className="col-start-1 col-end-4 sm:col-start-1 sm:col-end-3 place-content-center">
          <div className="w-full h-28 rounded-md overflow-hidden border-[1px] border-[#262626]">
            <img className="w-full h-full object-cover"
              src={episodeDetails?.image?.medium} alt={episodeDetails?.name}
            />
          </div>
        </div>
        <div className="col-start-4 col-end-9 sm:col-start-3 sm:col-end-9">
          <div className="">
            <h4 className="text-sm font-normal text-gray-300">Episode {episodeDetails?.number}</h4>
            <h4 className="text-lg font-medium mb-1">{episodeDetails?.name}</h4>
            <p className="text-xs font-normal text-gray-300">
              {episodeDetails?.summary?.length > 240 ? cleanText?.substring(0, 240) + " ..." : cleanText}
            </p>
          </div>
        </div>
      </article>
    )
  }
  
  export default EpisodeItem