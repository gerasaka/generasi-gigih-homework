const getTrack = async (query: string, accessToken: string) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`;
  return await fetch(url, {
    headers: { Authorization: "Bearer " + accessToken }
  }).then(res => res.json());
};

const getCurrentUser = async (accessToken: string) => {
  const url = `https://api.spotify.com/v1/me`;
  return await fetch(url, {
    headers: { Authorization: "Bearer " + accessToken }
  }).then(res => res.json());
};

const getUserPlaylists = async (accessToken: string) => {
  const url = "https://api.spotify.com/v1/me/playlists";
  return await fetch(url, {
    headers: { Authorization: "Bearer " + accessToken }
  }).then(res => res.json());
};

const getUserRecommendation = async (accessToken: string) => {
  const url = `https://api.spotify.com/v1/recommendations?limit=20&seed_artist=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA`;
  return await fetch(url, {
    headers: { Authorization: "Bearer " + accessToken }
  }).then(res => res.json());
}

export {getTrack, getCurrentUser, getUserPlaylists, getUserRecommendation}