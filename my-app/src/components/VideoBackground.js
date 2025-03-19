

const VideoBackground = ({showKey}) => {

    return (
        <div className="w-full overflow-x-hidden m-0 p-0">
            <iframe className="w-full aspect-video" 
            src={"https://www.youtube-nocookie.com/embed/" + showKey + "?&autoplay=1&mute=1"}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;