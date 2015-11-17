$(document).keydown(function(event){
  key = event.keyCode;
  console.log(String.fromCharCode(key).toLowerCase() + " down");
});

$(document).keyup(function(event){
  key = event.keyCode;
  console.log(String.fromCharCode(key).toLowerCase() + " up");
});
