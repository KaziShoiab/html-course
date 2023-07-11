// user defined functions

function newfun() {
  document.getElementById("backg").style.backgroundColor = "red";
}

function fun() {
  document.getElementById("content").innerHTML = "real content";
}

function hide() {
  document.getElementById("hidecon").style.display = "none";
}
function show() {
  document.getElementById("hidecon").style.display = "";
}
//  predefined functions

function timing() {
  document.getElementById("currentdate").innerHTML = Date();
}
function timing2(){
    document.getElementById('demo').innerHTML=Date();
    document.getElementById('demo').innerHTML='real content';
    document.getElementById('demo').style.color='red';
    document.getElementById('demo').style.display='none';
    document.getElementById('demo').style.display='';
}
