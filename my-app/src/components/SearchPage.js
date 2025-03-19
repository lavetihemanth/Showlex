import React, { useEffect, useState } from 'react'
import { API_URL, SEARCH_BG_URL, urlConstants } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allSuggestions, setAllSuggestions] = useState([]);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);

  const navigate = useNavigate();

  const fetchSearchResults = async () => {
    if(searchQuery !== ""){
      const result = await axios.get(`${API_URL}/${urlConstants?.searchShowUrl}${searchQuery}`);
      console.log(result?.data);
      setAllSuggestions(result?.data);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchResults();
    }, 200)

    return () => clearTimeout(timer);
  },[searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="max-w-full xl:max-w-[1351px] overflow-x-hidden my-0 mx-auto p-0">
        <div className='w-full absolute z-10 overflow-hidden top-0 left-0'>
            <img className="h-screen w-full object-cover"
              src={SEARCH_BG_URL} 
              alt="searchbg"
            />
        </div>
        <div className='max-w-[780px] mx-auto relative z-40'>
          <div className="h-[500px] flex justify-center mt-[46%] xxs:mt-[36%] xs:mt-[32%] sm:mt-[28%] md:mt-[18%] text-center">
            <h1
              className="flex items-center h-[40px] py-4 px-2 xs:mx-2 text-white text-sm sm:text-lg md:text-xl font-medium rounded-sm bg-transparent"
            >
              Search:
            </h1>
            <form className="w-3/4 xs:w-2/3 sm:w-3/5 md:w-1/2 grid">
                <input 
                    className="relative z-0 h-[40px] p-4 rounded-sm border-slate-400 border-[1px] outline-none bg-transparent backdrop-blur-lg text-xs sm:text-sm text-white placeholder:text-xs sm:placeholder:text-sm placeholder-slate-300 focus:placeholder-slate-500"
                    type="text"
                    placeholder="What would you like to watch?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowAllSuggestions(true)}
                    onBlur={() => {
                      setTimeout(() => {
                        setShowAllSuggestions(false);
                      }, 300);
                    }}
                    
                />
                {searchQuery?.length !== 0 && showAllSuggestions && (
                  <div className='w-3/4 xs:w-2/3 sm:w-3/5 md:w-1/2 absolute top-[40px] z-50 rounded-sm border-slate-400 outline-none bg-transparent backdrop-blur-lg text-sm text-white'>
                    {allSuggestions?.length === 0 ? (
                      <p className="p-2 pl-4 text-left border-slate-400 border-[1px] border-t-0 outline-none">No data found...</p>
                    ) : (
                      <ul>
                        {allSuggestions?.map((suggestion) => {
                          return (
                            <li className="p-2 pl-4 cursor-pointer text-left hover:text-slate-400 border-slate-400 border-[1px] border-t-0 outline-none"
                              key={suggestion?.show?.id}
                              onClick={() => {
                                setSearchQuery(suggestion?.show?.name);
                                navigate(`/browse/shows/${suggestion?.show?.id}`)
                              }}
                            >
                              <span>{suggestion?.show?.name}</span>
                            </li>
                          
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )}
            </form>
          </div>
        </div>
    </section>
  )
}