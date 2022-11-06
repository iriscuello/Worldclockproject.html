function realTime() {
  let shangElement = document.querySelector("#city-shang");
  if (shangElement) {
    let shangDateElement = shangElement.querySelector(".date");
    let shangTimeElement = shangElement.querySelector(".time");
    let shangTime = moment().tz("Asia/Shanghai");

    shangDateElement.innerHTML = shangTime.format("MMMM Do, YYYY");
    shangTimeElement.innerHTML = shangTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }

  let seoulElement = document.querySelector("#citySeoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }

  let athensElement = document.querySelector("#city-athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM Do, YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">
            ${cityTime.format("h:mm:ss")} <SMALL>${cityTime.format("A")}</SMALL>
          </div>
        </div>
        <a href="/" class=>Home</a>`;
}

realTime();
setInterval(realTime, 1000);

let citiesSelectElement = document.querySelector("#options");
citiesSelectElement.addEventListener("change", updateCity);
