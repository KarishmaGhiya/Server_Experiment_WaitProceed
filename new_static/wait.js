$(function() {
    // When we're using HTTPS, use WSS too.
	alert("in function");
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    //var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host + "/chat" + window.location.pathname);
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host  + window.location.pathname);
    alert(window.location.host);
    alert(window.location.pathname);
	//var message = {
    //    	  message: "Hello..Welcome to the waiting room",
	//	  //handle: "myname",
    //       };
	//handle=nickname or workerid 
	//   alert("inside event function");
    //       chatsock.send(JSON.stringify(message));
           //$("#message").val('').focus();
    //       //return false;

    chatsock.onmessage = function(message) {
        var data = JSON.parse(message.data);
	    //alert("inside onmessage");        
	    alert(data.url);
	    window.location.replace(data.url);
        
              
    };

	/*$("#wait_room").on("hover", function(event){
	   var message = {
        	  message: "Hello..Welcome to the waiting room",
		  handle: "myname",
           }
	   alert("inside event function");
           chatsock.send(JSON.stringify(message));
           //$("#message").val('').focus();
           return false;
	});​*/

    
});
/*
chatsock.onmessage = function(message) {
        //var data = JSON.parse(message.data);
	alert("inside onmessage");        
	alert(message.data);
        
              
    };*/
