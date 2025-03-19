import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAllShows from "../hooks/useAllShows";
import ShimmerHome from "./ShimmerHome";

const ShowsPage = () => {
    useAllShows();

    const allShowsData = useSelector((store) => store?.shows?.allShows);

    if(allShowsData === null)
        return <ShimmerHome />
    
  return (
    <div className="max-w-full md:max-w-[1351px] mx-auto">
        <MainContainer />
        <SecondaryContainer allShowsData={allShowsData}/>
    </div>
  )
}

export default ShowsPage