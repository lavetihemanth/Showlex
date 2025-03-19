import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-full aspect-video pt-[15%] pl-6 sm:pl-10 md:pl-14 absolute text-white from-zinc-900 overflow-x-hidden">
            <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-semibold w-2/5 pb-4">{title}</h1>
            <p className="hidden lg:block lg:text-sm font-light w-2/5">{overview}</p>
            <div className="flex pt-4">
                <button 
                   className="bg-white text-black py-[2px] px-1 sm:py-[3px] sm:px-2 md:py-1 md:px-3 lg:py-[6px] lg:px-4 text-xs md:text-sm lg:text-base rounded-sm hover:bg-opacity-80
                   flex items-center"
                >
                   <div className="px-1 text-sm md:text-base lg:text-lg"><FaPlay /></div>
                   <span>Play</span>
                </button>
                <button 
                   className="bg-gray-600 text-white mx-2 py-[2px] px-1 sm:py-[3px] sm:px-2 md:py-1 md:px-3 lg:py-[6px] lg:px-4 text-xs md:text-sm lg:text-base bg-opacity-70
                   hover:bg-opacity-40 rounded-sm flex items-center"
                >
                    <div className="pr-1 text-sm md:text-base lg:text-xl"><MdInfoOutline /></div>
                   <span className="pl-1">More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;