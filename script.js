const innerSecond = document.getElementById("second");
const innerTens = document.getElementById("tens");
const buttonStart = document.getElementById("buttonStart");
const buttonStop = document.getElementById("buttonStop");
const buttonReset = document.getElementById("buttonReset");

var second = 00;
var tens = 00;
var periode;

buttonStart.addEventListener("click", () => {
  clearInterval(periode);
  periode = setInterval(runTimer, 10);
});
buttonStop.addEventListener("click", () => {
  clearInterval(periode);
});
buttonReset.addEventListener("click", () => {
  clearInterval(periode);
  second = 0;
  tens = 0;
  innerSecond.innerHTML = "0" + second;
  innerTens.innerHTML = "0" + tens;
});

const runTimer = () => {
  tens++;
  tens <= 9 ? (innerTens.innerHTML = "0" + tens) : null;
  tens > 9 ? (innerTens.innerHTML = tens) : null;
  tens > 99
    ? (second++,
      (innerSecond.innerHTML = "0" + second),
      (tens = 0),
      (innerTens.innerHTML = "0" + 0))
    : null;
  second > 9 ? (innerSecond.innerHTML = second) : null;
};
