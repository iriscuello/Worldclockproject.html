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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div>
          <div>
            <h2 >${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <SMALL>${cityTime.format("A")}</SMALL></div>
        </div>
        `;
}
realTime();
setInterval(realTime, 1000);

let citiesSelectElement = document.querySelector("#options");

citiesSelectElement.addEventListener("change", updateCity);
