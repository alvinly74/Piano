keyActions = {
  keyDown: function(key){
    AppDispatcher.dispatch({
      actionType: "down",
      key: key
    });
  },

  keyUp: function(key){
    AppDispatcher.dispatch({
      actionType: "up",
      key: key
    });
  }
};
