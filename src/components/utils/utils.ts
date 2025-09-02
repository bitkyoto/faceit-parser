export const getAdr = (games: any[]) => {
  if (!games || games.length === 0) {
    return 0;
  }

  const totalAdr = games.reduce((sum: number, game: any) => {
    const adr = parseFloat(game.stats?.ADR) || 0;
    return sum + adr;
  }, 0);

  return (totalAdr / games.length).toFixed(1);
};

export const getKd = (games: any[]) => {
  if (!games || games.length === 0) {
    return 0;
  }
  const totalKd = games.reduce((sum: number, game: any) => {
    const kd = parseFloat(game.stats["K/D Ratio"]) || 0;
    return sum + kd;
  }, 0);

  return (totalKd / games.length).toFixed(2);
};
export const getKr = (games: any[]) => {
  if (!games || games.length === 0) {
    return 0;
  }
  const totalKr = games.reduce((sum: number, game: any) => {
    const kr = parseFloat(game.stats["K/R Ratio"]) || 0;
    return sum + kr;
  }, 0);

  return (totalKr / games.length).toFixed(2);
};
export const getWinrate = (games: any[]) => {
  if (!games || games.length === 0) {
    return 0;
  }
  const totalWinrate = games.reduce((sum: number, game: any) => {
    const win = parseFloat(game.stats["Result"]) || 0;
    return sum + win;
  }, 0);

  return ((totalWinrate / games.length) * 100).toFixed(0).toString() + "%";
};
export const getAvg = (games: any[]) => {
  if (!games || games.length === 0) {
    return 0;
  }

  const totalKills = games.reduce((sum: number, game: any) => {
    const kills = parseFloat(game.stats["Kills"]) || 0;
    return sum + kills;
  }, 0);

  return (totalKills / games.length).toFixed(1);
};
export const formatDate = (date: string) => {
  let nDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric", // Число (например, 22)
    month: "short", // Месяц полностью (например, "август")
    hour: "2-digit", // Часы (например, 13)
    minute: "2-digit", // Минуты (например, 57)
    timeZone: "Europe/Moscow", // Учитываем московское время
  };
  const formatDate = nDate.toLocaleString("ru-RU", options);
  const [datePart, timePart] = formatDate.split(", ");
  return `${datePart} ${timePart}`;
};

export const formatResult = (res: string) => {
  return res === "1" ? "Win" : "Lose";
};
