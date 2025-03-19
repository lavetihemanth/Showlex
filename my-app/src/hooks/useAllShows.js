import { useEffect } from "react"
import { urlConstants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllShows } from "../utils/showsSlice";
import axios from "axios";


const useAllShows = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllShows = async () => {
            const response = await axios.get(urlConstants?.fetchShowsUrl);
            dispatch(addAllShows(response.data));
        }
        const timerId = setTimeout(() => {
            fetchAllShows();
        }, 2000)
        return () => {
            clearTimeout(timerId);
        };
    }, [dispatch]);
}

export default useAllShows;