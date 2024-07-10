console.log("Test");
//check if audio has loaded
// const image = document.querySelector("img");
// image.addEventListener("load", function () {
//   console.log("Image has Loaded");
// });
//doesn't work on audio works with img

//get information about the audio tag
const audio = document.querySelector("audio");

audio.addEventListener("timeupdate", function () {
  console.log(audio.currentTime);
});

//making controls play pause stop skip
const playbtn = document.getElementById("play");
playbtn.addEventListener("click", function () {
  audio.play();
});
const pausebtn = document.getElementById("pause");
pausebtn.addEventListener("click", function () {
  audio.pause();
});
const stopbtn = document.getElementById("stop");
stopbtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

const mutebtn = document.getElementById("mute");
mutebtn.addEventListener("click", function () {
  audio.muted = !audio.muted;
});

const volbtn = document.getElementById("vol");
volbtn.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});

const skfbtn = document.getElementById("skf");
skfbtn.addEventListener("click", function () {
  audio.play();
  audio.currentTime += 15; //current time not defined
});
const skbbtn = document.getElementById("skb");
skbbtn.addEventListener("click", function () {
  audio.play();
  audio.currentTime -= 15;
});

const video = document.querySelector("video");

//making controls play pause stop skip
const vplaybtn = document.getElementById("vplay");
vplaybtn.addEventListener("click", function () {
  video.play();
});
const vpausebtn = document.getElementById("vpause");
vpausebtn.addEventListener("click", function () {
  video.pause();
});
const vstopbtn = document.getElementById("vstop");
vstopbtn.addEventListener("click", function () {
  video.pause();
  video.currentTime = 0;
});

const vskfbtn = document.getElementById("vskf");
vskfbtn.addEventListener("click", function () {
  video.play();
  video.currentTime += 15; //current time not defined
});
const vskbbtn = document.getElementById("vskb");
vskbbtn.addEventListener("click", function () {
  video.play();
  video.currentTime -= 15;
});
