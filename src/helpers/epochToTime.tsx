export const epochToTime = (epoch: number) => {
  const date = new Date(epoch * 1000);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? parseInt(`0${minutes}`) : minutes;

  const time = `${hours}:${minutes}:${seconds} ${ampm}`;

  return time;
};
