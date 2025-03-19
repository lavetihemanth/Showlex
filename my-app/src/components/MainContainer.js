import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { BANNER_INFO } from "../utils/constants";

const MainContainer = () => {

    const { key, original_title, overview } = BANNER_INFO;

    return (
        <div className="max-w-full xl:max-w-[1351px] mx-auto overflow-x-hidden m-0 p-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground showKey={key}/>
        </div>
    );
};

export default MainContainer;