import axios from "axios";
import { apiKey } from "../../assets/key";

export const findPlayer = (
  identifier: string,
  setResponse: (response: any) => void
) => {
  const url = `http://localhost:3000/faceit/player/`;
  axios.get(url, { params: { q: identifier } }).then((data) => {
    setResponse(data.data);
  });
};

export const getStats = (
  player_id: string,
  setResponse: (response: any) => void
) => {
  const url = `http://localhost:3000/faceit/stats/${player_id}`;
  axios.get(url).then((data) => {
    setResponse(data.data);
  });
};

export const getMatch = (match_id: string) => {
  return axios
    .get(`https://open.faceit.com/data/v4/matches/${match_id}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    .then((data) => data.data["faceit_url"].replace("{lang}", "en"));
};

export const getStatsByMap = (
  player_id: string,
  setMapData: (data: any) => void
) => {
  return axios
    .get(`http://localhost:3000/faceit/mapstats/${player_id}`)
    .then((data) => {
      console.log(data.data);
      setMapData(data.data);
    })
    .catch((err) => console.log(err));
};
