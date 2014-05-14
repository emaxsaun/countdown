(function(jwplayer){
  var template = function(player, config, div) {
    player.onComplete(hide);
	player.onReady(hide);
    player.onPause(hide);
    player.onTime(count);
    function count(event) {
        div.innerHTML = Math.round(event.duration - event.position);
        style({visibility: 'visible'});
		style({opacity: 1});
		if (player.getRenderingMode() == "flash"){
		  div.style.opacity = 1;
		  div.style.visibility = 'visible';
		}
    };
    function hide() {
        style({visibility: 'hidden'});
		style({opacity: 0});
		if (player.getRenderingMode() == "flash"){
		  div.style.opacity = 0;
		  div.style.visibility = 'hidden';
		}
    };
    this.resize = function(width, height) {
        style({
            position: 'absolute',
            margin: (height/2-30)+'px '+(width/2-30)+'px',
            background: 'black',
            border: '1px solid white',
            color: 'red',
            fontSize: '32px',
			fontFamily: 'sans-serif',
            height: '60px',
            lineHeight: '60px',
            textAlign: 'center',
            opacity: 0,
            width: '60px',
			MozUserSelect: 'none',
			KhtmlUserSelect: 'none',
			WebkitUserSelect: 'none',
			OUserSelect: 'none',
			UserSelect: 'none'
        });
    };
    function style(object) {
        for(var style in object) {
          if (player.getRenderingMode() == "html5"){
			div.style[style] = object[style];
		  } else {
			var theBody = document.getElementById(player.id+"_wrapper");
			var theHeight = parseInt(theBody.style.height, 10);
			var theWidth = parseInt(theBody.style.width, 10);
		    div.style.position = 'absolute';
            div.style.margin = (theHeight/2-30)+'px '+(theWidth/2-30)+'px';
            div.style.background = 'black';
            div.style.border = '1px solid white';
            div.style.color = 'red';
            div.style.fontSize = '32px';
			div.style.fontFamily = 'sans-serif';
            div.style.height = '60px';
            div.style.lineHeight = '60px';
            div.style.textAlign = 'center';
            div.style.opacity = 0;
            div.style.width = '60px';
			div.style.MozUserSelect = 'none';
			div.style.KhtmlUserSelect = 'none';
			div.style.WebkitUserSelect = 'none';
			div.style.OUserSelect = 'none';
			div.style.UserSelect = 'none';
		  }
        }
     };
  };
  jwplayer().registerPlugin('countdown', '6.0', template);
})(jwplayer);