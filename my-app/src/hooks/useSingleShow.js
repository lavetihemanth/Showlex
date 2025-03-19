import { useEffect, useState } from "react";
import axios from "axios";
import { urlConstants } from "../utils/constants";


const useSingleShow = (showId) => {
    const [showInfo, setShowInfo] = useState(null);

    const fetchSingleShow = async () => {
        const response = await axios.get(`${urlConstants?.fetchShowsUrl}/${showId}${urlConstants?.seasonsCastEpisodesEmbed}`);
        setShowInfo(response?.data);
    }

    useEffect(() => {
        
        const timerId = setTimeout(() => {
            fetchSingleShow();
        }, 2000)
        return () => {
            clearTimeout(timerId);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return showInfo;
};

export default useSingleShow