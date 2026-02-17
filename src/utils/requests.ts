import axios from "axios";

export const findPlayer = async (
  identifier: string,
  setResponse: (response: any) => void,
  setError: (error: any) => void
) => {
  try {
    const url = `http://localhost:3000/faceit/player/`;
    const response = await axios.get(url, { params: { q: identifier } });
    setResponse(response.data);
  } catch (error) {
    setError(error);
  }
};
export const findEnemyAndGetStats = async (
  identifier: string,
  setResponse: (response: any) => void
) => {
  try {
    const url = `http://localhost:3000/faceit/player/`;
    const response = await axios.get(url, { params: { q: identifier } });
    getStatsAndAvatar(
      response.data.player_id,
      setResponse,
      response.data.avatar,
      response.data.nickname
    );
  } catch (error) {}
};

export const getStats = async (
  player_id: string,
  setResponse: (response: any) => void
) => {
  try {
    const url = `http://localhost:3000/faceit/stats/${player_id}`;
    const response = await axios.get(url);
    setResponse(response.data);
  } catch (err) {}
};
export const getGames = async (
  player_id: string,
  page: number,
  setResponse: (response: any) => void
) => {
  try {
    const url = `http://localhost:3000/faceit/games/${player_id}`;
    const response = await axios.get(url, { params: { page: page } });
    setResponse(response.data);
  } catch (err) {}
};
export const getStatsAndAvatar = async (
  player_id: string,
  setResponse: (response: any) => void,
  avatar: string,
  nickname: string
) => {
  try {
    const url = `http://localhost:3000/faceit/stats/${player_id}`;
    const response = await axios.get(url);
    const ndata = response.data;
    ndata.avatar = avatar;
    ndata.nickname = nickname;
    setResponse(ndata);
  } catch (error) {}
};

export const getStatsByMap = async (
  player_id: string,
  setMapData: (data: any) => void
) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/faceit/mapstats/${player_id}`
    );
    setMapData(response.data);
  } catch (error) {}
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
  } catch (err) {}
};
