(function(){
			function xys(){
				var html = document.querySelector("html")
				html.style.fontSize = innerWidth/7.5 + "px";
				var userAgent = navigator.userAgent;
				console.log(userAgent);
	
				if(userAgent.indexOf("Android")!=-1||userAgent.indexOf("iPhone")!=-1
				||userAgent.indexOf("iPad")!=-1){
					html.className = "mobile"
				}else{
					html.className = "pc";
				}
				
				if(innerWidth<320){
					html.className += " lt320 lt640 lt960 lt1200";
				}else if(innerWidth<640){
					html.className += " gt320 lt640 lt960 lt1200";
				}else if(innerWidth<960){
					html.className += " gt320 gt640 lt960 lt1200";
				}else if(innerWidth<1200){
					html.className += " gt320 gt640 gt960 lt1200";
				}else{
					html.className += " gt320 gt640 gt960 gt1200";
				}
			}
			
			window.onresize =  function(){
				xys();
			}
			xys();
})()