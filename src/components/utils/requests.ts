import axios from "axios";
import { apiKey } from "../../assets/key";

export const findPlayer = (
  nick: string,
  setResponse: (response: any) => void
) => {
  const endpoints = [
    `https://open.faceit.com/data/v4/search/players?nickname=${nick}`,
    `https://open.faceit.com/data/v4/players?nickname=${nick}`,
  ];
  const requests = endpoints.map((url) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
  );
  axios.all(requests).then(
    axios.spread((...responses) => {
      const [data1, data2] = responses;
      data1.data.items[0]["faceit_url"] = data2.data["faceit_url"];
      data1.data.items[0]["faceit_elo"] = data2.data.games.cs2["faceit_elo"];
      setResponse(data1.data);
    })
  );
};

export const getStats = (
  player_id: string,
  setResponse: (response: any) => void
) => {
  axios
    .get(
      `https://open.faceit.com/data/v4/players/${player_id}/games/cs2/stats?limit=100`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    )
    .then((data) => setResponse(data.data));
};

export const getMatch = (match_id: string) => {
  return axios
    .get(`https://open.faceit.com/data/v4/matches/${match_id}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    .then((data) => data.data["faceit_url"].replace("{lang}", "en"));
};
