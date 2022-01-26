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

const getDate = () => {
  let date = new Date();

  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  let month = date.getMonth();
  month = month + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  let week = date.getDay();
  switch (week) {
    case 0:
      week = "SUN";
      break;
    case 1:
      week = "MON";
      break;
    case 2:
      week = "TUE";
      break;
    case 3:
      week = "WED";
      break;
    case 4:
      week = "THU";
      break;
    case 5:
      week = "FRI";
      break;
    case 6:
      week = "SAT";
      break;
  }

  let fullDate = `${week}-${day}.${month}.${date.getFullYear()}`;
  fullDateItem.innerText = fullDate;
};

const time = document.getElementById("time");
const fullDateItem = document.getElementById("dates");

setInterval(getTime, 1000);
setInterval(getDate, 1000);
