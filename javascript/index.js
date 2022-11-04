let shangElement = document.querySelector("#city-shang");
let shangDateElement = document.querySelector(".date");
let shangTimeElement = document.querySelector(".time");
shangDateElement.innerHTML = moment().format("MMMM Do YYYY");
shangTimeElement.innerHTML = moment().format("h:m:ss");
