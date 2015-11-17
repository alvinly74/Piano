$(document).keydown(function(event){
  key = event.keyCode;
  keyActions.keyDown(String.fromCharCode(key).toLowerCase());
});

$(document).keyup(function(event){
  key = event.keyCode;
  keyActions.keyUp(String.fromCharCode(key).toLowerCase());
});
