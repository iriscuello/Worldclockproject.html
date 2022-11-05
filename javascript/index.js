function realTime() {
  let shangElement = document.querySelector("#city-shang");
  let shangDateElement = shangElement.querySelector(".date");
  let shangTimeElement = shangElement.querySelector(".time");
  let shangTime = moment().tz("Asia/Shanghai");

  shangDateElement.innerHTML = shangTime.format("MMMM Do, YYYY");
  shangTimeElement.innerHTML = shangTime.format("h:mm:ss [<small>]a[</small>]");

  let seoulElement = document.querySelector("#citySeoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]a[</small>]");
}

realTime();
setInterval(realTime, 1000);
