import axios from "axios";

export const findPlayer = async (
  identifier: string,
  setResponse: (response: any) => void,
  setError: (error: any) => void
) => {
  try {
    const url = `https://faceit-parser-backend.vercel.app/faceit/player/`;
    const response = await axios.get(url, { params: { q: identifier } });
    setResponse(response.data);
  } catch (error) {
    setError(error);
    console.error(error);
  }
};
export const findEnemyAndGetStats = async (
  identifier: string,
  setResponse: (response: any) => void
) => {
  try {
    const url = `https://faceit-parser-backend.vercel.app/faceit/player/`;
    const response = await axios.get(url, { params: { q: identifier } });
    getStatsAndAvatar(
      response.data.player_id,
      setResponse,
      response.data.avatar,
      response.data.nickname
    );
  } catch (error) {
    console.error(error);
  }
};

export const getStats = async (
  player_id: string,
  setResponse: (response: any) => void
) => {
  try {
    const url = `https://faceit-parser-backend.vercel.app/faceit/stats/${player_id}`;
    const response = await axios.get(url);
    setResponse(response.data);
  } catch (err) {
    console.error(err);
  }
};
export const getGames = async (
  player_id: string,
  setResponse: (response: any) => void
) => {
  try {
    const url = `https://faceit-parser-backend.vercel.app/faceit/games/${player_id}`;
    const response = await axios.get(url);
    setResponse(response.data);
  } catch (err) {
    console.error(err);
  }
};
export const getStatsAndAvatar = async (
  player_id: string,
  setResponse: (response: any) => void,
  avatar: string,
  nickname: string
) => {
  try {
    const url = `https://faceit-parser-backend.vercel.app/faceit/stats/${player_id}`;
    const response = await axios.get(url);
    const ndata = response.data;
    ndata.avatar = avatar;
    ndata.nickname = nickname;
    setResponse(ndata);
  } catch (error) {
    console.error(error);
  }
};

export const getStatsByMap = async (
  player_id: string,
  setMapData: (data: any) => void
) => {
  try {
    const response = await axios.get(
      `https://faceit-parser-backend.vercel.app/faceit/mapstats/${player_id}`
    );
    setMapData(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getLeaderBoard = async (
  region: string,
  setData: (data: any) => void
) => {
  try {
    const data = await axios.get(
      `https://faceit-parser-backend.vercel.app/faceit/leaderboard?region=${region}`
    );
    setData(data.data);
  } catch (err) {
    console.error(err);
  }
};
