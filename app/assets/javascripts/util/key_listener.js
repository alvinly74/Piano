$(document).keydown(function(event){
  key = event.keyCode;
  keyActions.keyDown(key.toString());
});

$(document).keyup(function(event){
  key = event.keyCode;
  keyActions.keyUp(key.toString());
});
