const collecton = document.querySelector(".color-variant");
const img = collecton.querySelectorAll("img");
const speaker = document.getElementById("speaker");
const varColor = document.querySelector(":root");

img[0].onclick = () => {
  speaker.src = "images/1.png";
  varColor.style.setProperty("--main-color", "#D1632B");
};
img[1].onclick = () => {
  speaker.src = "images/3.png";
  varColor.style.setProperty("--main-color", "#274c71");
};
img[2].onclick = () => {
  speaker.src = "images/4.png";
  varColor.style.setProperty("--main-color", "#76c16f");
};
img[3].onclick = () => {
  speaker.src = "images/5.png";
  varColor.style.setProperty("--main-color", "#b86bbd");
};
img[4].onclick = () => {
  speaker.src = "images/6.png";
  varColor.style.setProperty("--main-color", "#c67595");
};
