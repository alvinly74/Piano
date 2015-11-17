(function(root) {
  'use strict';

  var _keys = [];

  var addKey = function(key){
    console.log("added " + key);
    _keys.push(key);
  };

  var removeKey = function(key){
    var index = _keys.indexOf(key);
    if (index != -1){
      console.log("removed " + key);
      _keys.splice(index,1);
    }
  };


  var KeyStore = root.KeyStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _keys;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case "down":
          addKey(payload.key);
          break;
        case "up":
          removeKey(payload.key);
          break;
      }
    })
  });
})(this);
