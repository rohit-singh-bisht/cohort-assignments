const clock = (get24HoursFormat) => {
  const date = new Date();

  if (!get24HoursFormat) {
    const currentTime = date.toLocaleTimeString();
    return currentTime;
  }

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}}`;

  return formattedTime;
};

const printTimeSetInterval = () => {
  setInterval(() => {
    console.log("clock", clock((get24HoursFormat = true)));
  }, 1000);
};

const printTimeSetTimeout = () => {
  setTimeout(() => {
    console.log("clock", clock((get24HoursFormat = false)));
    printTimeSetTimeout();
  }, 1000);
};
