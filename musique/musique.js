document.addEventListener('DOMContentLoaded', function(){
    //alert("le son");
    document.getElementById('btnplay').onclick = function() {
      document.getElementById('player').play();
      return false;
    }
    document.getElementById('btnpause').onclick = function() {
      document.getElementById('player').pause();
      return false;
    }


    // Taille de l'Ã©cran
    	var taiEX = $(window).width();
    	var	taiEY = $(window).height();
document.getElementById('fulls').onclick = function() {
    // MODE FULLSCREEN
    //function goFS() {
    	if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    		if (document.documentElement.requestFullscreen) {
    				document.documentElement.requestFullscreen();
    		} else if (document.documentElement.msRequestFullscreen) {
    				document.documentElement.msRequestFullscreen();
    		} else if (document.documentElement.mozRequestFullScreen) {
    				document.documentElement.mozRequestFullScreen();
    		} else if (document.documentElement.webkitRequestFullscreen) {
    				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    		}
    		// Taille de l'Ã©cran
    		taiEX = window.screen.width;
    		taiEY = window.screen.height;
    	} else {
    		if (document.cancelFullScreen) {
          document.cancelFullScreen();
    		} else if (document.msCancelFullScreen) {
          document.msCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
    		taiEX = $(window).width();
    		taiEY = $(window).height();
    	}
    }




});
