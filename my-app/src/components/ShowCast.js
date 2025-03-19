import { useSelector } from "react-redux"


const ShowCast = () => {
  
    const castData = useSelector((store) => store?.shows?.singleShow?._embedded?.cast)
    console.log(castData);

  return (
    <section className="text-white overflow-hidden px-6 py-6">
        <h2 className="text-xl font-medium">Cast</h2>
        {castData?.length === 0 ? (
          <h2 className="mb-2 text-xs font-normal">No cast details available</h2>
        ) : (
        <div className="mt-2 shows-list grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-4 lg:gap-x-6 gap-y-6">
            {castData?.map((cast) => (
                <div className=""
                  key={`${cast?.character?.id}${Math.random()}`} 
                >
                    <div className="w-3/4 h-auto xs:w-40 xs:h-56 md:w-44 md:h-60 mb-1 rounded-sm overflow-hidden border-[1px] border-[#262626]">
                        <img className="w-full h-full object-cover"
                          src={cast?.character?.image?.medium} alt={cast?.character?.name}
                        />
                    </div>
                    <h3 className="font-medium text-sm">{cast?.person?.name}</h3>
                    <h4 className="font-normal text-xs text-gray-300">as 
                        <span className="text-white font-medium"> {cast?.character?.name}</span>
                    </h4>
                </div>
            ))}
            </div>
        )}
    </section>
  )
}

export default ShowCast