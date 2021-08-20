import axios from "axios";

const getTrackData = async (query: string, token: string) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
  return await axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};

export default getTrackData;