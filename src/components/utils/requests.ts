import axios from "axios";

export const findPlayer = (
  identifier: string,
  setResponse: (response: any) => void
) => {
  const url = `http://localhost:3000/faceit/player/`;
  axios.get(url, { params: { q: identifier } }).then((data) => {
    setResponse(data.data);
  });
};
export const findEnemyAndGetStats = async (
  identifier: string,
  setResponse: (response: any) => void
) => {
  const url = `http://localhost:3000/faceit/player/`;
  const response = await axios.get(url, { params: { q: identifier } });
  getStatsAndAvatar(
    response.data.player_id,
    setResponse,
    response.data.avatar,
    response.data.nickname
  );
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
export const getGames = (
  player_id: string,
  setResponse: (response: any) => void
) => {
  const url = `http://localhost:3000/faceit/games/${player_id}`;
  axios.get(url).then((data) => {
    setResponse(data.data);
  });
};
export const getStatsAndAvatar = (
  player_id: string,
  setResponse: (response: any) => void,
  avatar: string,
  nickname: string
) => {
  const url = `http://localhost:3000/faceit/stats/${player_id}`;
  axios.get(url).then((data) => {
    const ndata = data.data;
    ndata.avatar = avatar;
    ndata.nickname = nickname;
    setResponse(ndata);
  });
};

export const getStatsByMap = (
  player_id: string,
  setMapData: (data: any) => void
) => {
  return axios
    .get(`http://localhost:3000/faceit/mapstats/${player_id}`)
    .then((data) => {
      setMapData(data.data);
    })
    .catch((err) => console.error(err));
};

export const getLeaderBoard = async (
  region: string,
  setData: (data: any) => void
) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/faceit/leaderboard?region=${region}`
    );
    setData(data.data);
  } catch (err) {
    console.error(err);
  }
};
