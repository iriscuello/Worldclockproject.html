let shangElement = document.querySelector("#city-shang");
let shangDateElement = document.querySelector(".date");
let shangTimeElement = document.querySelector(".time");
let shangTime = moment();

shangDateElement.innerHTML = shangTime.format("MMMM Do, YYYY");
shangTimeElement.innerHTML = shangTime.format("h:m:ss [<small>]a[</small>]");
