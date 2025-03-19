import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({title, posterPath}) => {
    return (
        <div className="w-36 pr-3">
            <img className="rounded-sm"
                 alt={title} 
                 src={IMG_CDN_URL + posterPath}
            />
        </div>
    );
};

export default MovieCard;