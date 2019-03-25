var client
function startDataUpload() {

var question_title = document.getElementById("question_title").value;
var question_text = document.getElementById("question_text").value;
var answer_1= document.getElementById("answer_1").value;
var answer_2= document.getElementById("answer_2").value;
var answer_3= document.getElementById("answer_3").value;
var answer_4= document.getElementById("answer_4").value;
var port_id= document.getElementById("port_id").value;
var correct_answer = document.getElementById("correct_answer").value;
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
var postString = "question_title="+question_title+"&question_text="+question_text+"&answer_1="+answer_1+"&answer_2="+answer_2+"&answer3="+answer_3+"&answer4="+answer_4+"&port_id="+port_id +"&correct_answer"+correct_answer+"&longitude"+longitude+"&latitude"+latitude;
alert(postString);
processData(postString);
} 
function processData(postString) {
 client = new XMLHttpRequest();
 var url = 'http://developer.cege.ucl.ac.uk:30293/reflectData';
 client.open('POST',url,true);
 client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 client.onreadystatechange = dataUploaded;
 client.send(postString);
}

function dataUploaded() {
 
 if (client.readyState == 4) {
 
 document.getElementById("dataUploadResult").innerHTML = client.responseText;
  }
}

