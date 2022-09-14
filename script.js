var server=firebase.database();
var password
var result=""
var request_server
location.href="#home"
var name=localStorage.getItem("name")
var n1
setTimeout(function(){
  if(typeof name==="undefined"||name==="null"){
   Token(5)
   localStorage.name=result
   location.href=""
  }
  else{
   document.getElementById("name").value=name;
  }
},2000)

function join(){
  document.getElementById("join_btn").innerHTML="Connecting"
  n1=document.getElementById("name").value
  localStorage.name=n1;
  request_server=document.getElementById("code-join").value;
  server.ref("rooms/"+request_server).on("value",function(snap){
    password=snap.val().Password
  })
  setTimeout(function(){
    if(typeof password==="undefined"||password===null){
      document.getElementById("info").innerHTML="Join Failed Please Re-check the room code and try again."
      document.getElementById("join_btn").innerHTML="Try Again"
    }
    else{
      document.getElementById("info").innerHTML="Connecting.."
      location.href="play/?room="+request_server
    }
  },5000)
  
}



















function Token(length) {

  var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
   console.log(result)
}