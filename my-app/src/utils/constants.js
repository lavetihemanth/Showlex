export const APP_LOGO = "https://res.cloudinary.com/dencbmqyy/image/upload/v1725625595/showlex_r0wmo9.png";

export const USER_AVATAR = "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const MOVIE_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://res.cloudinary.com/dencbmqyy/image/upload/v1726634965/loginBg_nryxlw.webp";

export const SEARCH_BG_URL = "https://res.cloudinary.com/dencbmqyy/image/upload/v1726635047/searchBg_p2uauq.webp";

export const BANNER_INFO = {
  key: "DotnJ7tTA34",
  original_title: "House of the Dragon",
  overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
}

export const API_URL = "https://api.tvmaze.com";

export const urlConstants = {
  apiBaseUrl: API_URL,
  fetchShowsUrl: `${API_URL}/shows`,
  seasonsCastEpisodesEmbed: "?embed[]=episodes&embed[]=cast&embed[]=seasons",
  searchShowUrl: "search/shows?q=",
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;