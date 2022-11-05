function realTime() {
  let shangElement = document.querySelector("#city-shang");
  let shangDateElement = document.querySelector(".date");
  let shangTimeElement = document.querySelector(".time");
  let shangTime = moment().tz("Asia/Shanghai");

  shangDateElement.innerHTML = shangTime.format("MMMM Do, YYYY");
  shangTimeElement.innerHTML = shangTime.format("h:mm:ss [<small>]a[</small>]");

  let seoulElement = document.querySelector("#citySeoul");
  let seoulDateElement = document.querySelector(".date");
  let seoulTimeElement = document.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]a[</small>]");
}

realTime();
setInterval(realTime, 1000);
