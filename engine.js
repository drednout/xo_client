var t = new Array(9);

function ai() {
  var id = Math.floor(Math.random() * 9);
  t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' || t[0]=='player' && t[1]=='player' && t[2]=='player')  return true;
  if (t[3]=='ai' && t[4]=='ai' && t[5]=='ai' || t[3]=='player' && t[4]=='player' && t[5]=='player')  return true;
  if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai' || t[6]=='player' && t[7]=='player' && t[8]=='player')  return true;
  if (t[0]=='ai' && t[3]=='ai' && t[6]=='ai' || t[0]=='player' && t[3]=='player' && t[6]=='player')  return true;
  if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai' || t[1]=='player' && t[4]=='player' && t[7]=='player')  return true;
  if (t[2]=='ai' && t[5]=='ai' && t[8]=='ai' || t[2]=='player' && t[5]=='player' && t[8]=='player')  return true;
  if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai' || t[0]=='player' && t[4]=='player' && t[8]=='player')  return true;
  if (t[2]=='ai' && t[4]=='ai' && t[6]=='ai' || t[2]=='player' && t[4]=='player' && t[6]=='player')  return true;
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player') ? ai() : null : reset()
  console.log(httpGet("http://localhost:11301/"));
  register_data = {
      "email": "dr100@localhost",
      "nickname": "dr100",
      "password": "1",
      "password_repeat": "1",
  }
  console.log(httpPost("http://localhost:11301/register/email/", register_data));
}

function reset() {
  alert("Игра окончена!");
  location.reload();
}

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    //xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl, data)
{
    var xmlHttp = null;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", theUrl, true);
    xmlhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );
    encoded_data = JSON.stringify(data)
    console.log("encoded_data is " + encoded_data)
    xmlhttp.send(encoded_data);
    return xmlHttp.responseText;
}
