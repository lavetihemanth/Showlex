import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SeasonItem from "./SeasonItem";
import { FaCaretDown } from "react-icons/fa";


const SeasonList = () => {
    const [seasonVal, setSeasonVal] = useState(0);
    const [seasonDetails, setSeasonDetails] = useState(null);

    const seasonsData = useSelector((store) => store?.shows?.singleShow?._embedded?.seasons);
    
    useEffect(() => {
      setSeasonDetails(seasonsData[seasonVal]);
    }, [seasonVal, seasonsData]);

    const handleSeasonChange = (event) => {
      setSeasonVal(parseInt(event.target.value));

    }

  return (
    <section className="p-6">
      <div className="flex justify-start mb-2">
        <div className="flex relative min-w-[120px]">
          <select className="w-full px-2 py-1 border-none outline-none rounded-sm bg-zinc-800 appearance-none"
            value={seasonVal} onChange={handleSeasonChange}
          >
            {seasonsData.map((season, index) => (
              <option className="border-none outline-none"
                key={season?.id} value={index}
              >
                Season {index + 1}
              </option>
            ))}
          </select>
          <span className="w-9 h-full rounded-r-sm rounded-b-sm absolute right-0 flex justify-center items-center pointer-events-none text-sm text-white bg-black">
            <FaCaretDown /> 
          </span>
        </div>
      </div>

      <SeasonItem seasonData={seasonDetails} />
    </section>
  )
}

export default SeasonList