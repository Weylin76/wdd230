const todaysdate = new Date();
const month = todaysdate.getMonth()+1;
const day = todaysdate.getDate();
const year = todaysdate.getFullYear();
const hour = todaysdate.getHours();
const minutes = todaysdate.getMinutes();
const seconds = todaysdate.getSeconds();

const date = new Date(document.lastModified);
const currentDate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
document.getElementById("currentDate").innerHTML = currentDate;