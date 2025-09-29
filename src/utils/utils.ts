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
