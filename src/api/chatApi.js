
var stompClient = null;
const Stomp = require("stompjs");
var SockJS = require("sockjs-client");

/*export function setConnected(connected) {
  document.getElementById("connect").disabled = connected;
  document.getElementById("disconnect").disabled = !connected;
  document.getElementById("conversationDiv").style.visibility = connected
    ? "visible"
    : "hidden";
  document.getElementById("response").innerHTML = "";
}*/

export function connect(idPoputchik) {
  var socket = new SockJS("http://localhost:8081/chat");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    //setConnected(true);
    console.log("Connected: " + frame);
    stompClient.subscribe(`/topic/messages/${idPoputchik}`);
  });
}

export function disconnect() {
  if (stompClient != null) {
    stompClient.disconnect();
  }
  //setConnected(false);
  console.log("Disconnected");
}

export function sendMessage(idPoputchik) {
    var text = document.getElementById('text').value;
    stompClient.send("/app/chat", { token: localStorage.getItem('Token')}, 
      JSON.stringify({'text':text, 'idPoputchik': idPoputchik}));
}

