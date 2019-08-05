function ajax(httpUrl,fn){
	var xhr=new XMLHttpRequest();
	xhr.open("GET",httpUrl);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			fn(xhr);
		}
		
	}
}