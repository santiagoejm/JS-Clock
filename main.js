const getTime = () => {
  let hrs = unifyTime(new Date().getHours());
  let min = unifyTime(new Date().getMinutes());
  let sec = unifyTime(new Date().getSeconds());

  let current = `${hrs}:${min}:${sec}`;
  return (time.innerText = current);
};

const unifyTime = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const time = document.getElementById("time");

setInterval(getTime, 1000);
