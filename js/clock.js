const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("Hello");
}

function christmasEveCounter() {
  const today= new Date;
  const thisYear = new Date().getFullYear();
  const dday = new Date(thisYear, 11, 25);
  const ddayCount = dday.getTime() - today.getTime();
  
  const daysTilEve = Math.floor(ddayCount/(1000 * 60 * 60 * 24));
  const hoursTilEve = String(Math.floor((ddayCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minsTilEve = String(Math.floor(ddayCount % (1000 * 60 * 60 ) / (1000 * 60 ))).padStart(2,"0");
  const secsTilEve = String(Math.floor(ddayCount % (1000 * 60 ) / 1000)).padStart(2,"0");

  clock.innerText = `${daysTilEve}d ${hoursTilEve}h ${minsTilEve}m ${secsTilEve}s`;

}

christmasEveCounter();
setInterval(christmasEveCounter, 1000);
