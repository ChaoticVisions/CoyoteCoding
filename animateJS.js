var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://raw.githubusercontent.com/ChaoticVisions/CoyoteCoding/master/animateCSS.scss';
link.media = 'all';
head.appendChild(link);
var aJS = {
  anim: function(item,animationID) {
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
}
