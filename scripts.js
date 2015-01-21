// JavaScript Document
jQuery(document).ready(function () {
	var flyId = 0
	var zindex = 1000
	var currentMousePos = { x: -1, y: -1 };
    jQuery(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
		moveCursor();
    });
    jQuery("#flies").click(function () {
        
		createFly();
		
    });
	
	var createFly = function(){
		if(flyId<150){
		++flyId;
		++zindex;
		var flyAudio = document.createElement('audio');
		var audionumber = Math.ceil(Math.random() *3);
		var duration = Math.ceil(Math.random() *5000)+2000;
   		flyAudio.setAttribute('src', '/wp-content/plugins/flies/assets/fly'+audionumber+'.mp3');
		flyAudio.loop = true;
		flyAudio.play();
		
	
		var imgheight = Math.ceil(Math.random() * 100) +20;
		var left = Math.ceil(Math.random() * (screen.width+200)) -100;
		var top = 0;
		var vanboven = 0;
		if( (Math.ceil(Math.random() * (screen.width+200)) -100)>50){
			vanboven = 1;
		}
		
		if(left<0 || left>screen.width){
			top = Math.ceil(Math.random() * (screen.height)) -100;
		}else if(vanboven){
			top = -100; 
		}else{
			top = screen.height + 100;
		}
		jQuery('body').append('<div id="fly'+flyId+'" style="opacity:0;position:absolute; top:'+top+'px; left:'+left+'px;z-index:'+zindex+'"><img height="'+imgheight+'" src="/wp-content/plugins/flies/images/fly.png"></div>');
		
		jQuery("#fly"+flyId).animate({
			opacity: 1,
			left: currentMousePos.x + (Math.ceil(Math.random() * 400) -200),
			top: currentMousePos.y + (Math.ceil(Math.random() * 400) -200)
		}, duration, function() {
			createFly();
			moveCursor();
		});
		}
	}
	
	var moveCursor = function(){
		
		for(var i=1;i<=flyId;i++){
			var duration = Math.ceil(Math.random() *5000)+2000;
			jQuery("#fly"+i).animate({
				opacity: 1,
				left: currentMousePos.x + (Math.ceil(Math.random() * 400) -200),
				top: currentMousePos.y + (Math.ceil(Math.random() * 400) -200)
			}, duration, function() {
				createFly();
			});
		}
	}
});
