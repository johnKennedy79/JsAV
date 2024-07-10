console.log("Test");
//check if audio has loaded
const image = document.querySelector("img");
image.addEventListener("load", function () {
  console.log("Image has Loaded");
});
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
