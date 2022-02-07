const colors = ["#fff", "coral", "orange", "red", "#777", "green", "grey", "yellow", "gold", "pink"];

const btn = document.querySelector(".btn");

btn.addEventListener("click", function changeBgColor () {
  let colorIndex = Math.floor(Math.random() * (colors.length+1))

  document.body.style.backgroundColor = colors[colorIndex];
})