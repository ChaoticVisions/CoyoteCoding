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
