const { default: axios } = require("axios");

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

const getVideos=async(query)=>{
    const params={
    part:'snippet',
    q:query,
    maxResults:2,
    key:process.env.NEXT_PUBLIC_YOUTUBE_API
    }

    const resp=await axios.get(YOUTUBE_BASE_URL+'/search',{params})

    return resp.data.items;
}

export default{
    getVideos
}

