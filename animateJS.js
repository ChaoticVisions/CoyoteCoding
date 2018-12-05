function anim(item,animationID) {
  if(animationID == 1) {
    $(item).toggleClass('pulse');
  }
   if(animationID == 2) {
	  $(item).toggleClass('bobble');
  }
   if(animationID == 3) {
	  $(item).toggleClass('background-slide');
  }
   if(animationID == 4) {
	  $(item).toggleClass('rectangle-out');
  }
}
$(document).onload(function() {
  var style = document.createElement("style");
	style.innerHTML = ".pulse {
  animation:pulse 1s infinite linear;
}
.bobble {
  animation:bobble 2s infinite linear;
  box-shadow:0px 0px 35px black;
  animation-direction: alternate-reverse;
}
.background-slide {
  animation:background-slide 10s infinite linear;
  color:white;
  animation-direction:reverse alternate;
}
.rectangle-out {
  box-shadow:inset 150px 150px black;
}
@keyframes pulse {
  0% {transform:scale(1);}
  50% {transform:scale(1.1);}
}
@keyframes bobble {
  0% {transform:scaleX(1.0), translateY(0px);box-shadow:0;}
  50% {transform:translateY(-5px);}
}
@keyframes background-slide {
  0% {box-shadow:inset 0px 150px darken(white,100%);}
  10% {box-shadow:inset 0px -150px darken(white,100%);}
    20% {box-shadow:inset 0px 150px darken(white,100%);}
  30% {box-shadow:inset 0px -150px darken(white,100%);}
  40% {box-shadow:inset 0px 150px darken(white,100%);}
  50% {box-shadow:inset 0px -150px darken(white,100%);}
    60% {box-shadow:inset 0px 150px darken(white,100%);}
  70% {box-shadow:inset 0px -150px darken(white,100%);}
    80% {box-shadow:inset 0px 150px darken(white,100%);}
  90% {box-shadow:inset 0px -150px darken(white,100%);}
    100% {box-shadow:inset 0px 150px darken(white,100%);}
}
";document.appendChild(style);
})
