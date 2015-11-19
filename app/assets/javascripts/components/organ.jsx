var Organ = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentDidMount: function(){
    KeyStore.addKeyListChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({});
  },
  keys1: function(){
    return ["81", "50", "87", "51", "69", "82", "53", "84", "54", "89", "55", "85", "73"].map(function(el, idx){
      return(
        <Key freq={el} key={idx}/>
      );
    });
  },
  keys2: function(){
    return ["67", "70", "86", "71", "66", "78", "74", "77", "75", "188", "76", "190", "191"].map(function(el, idx){
      return(
        <Key freq={el} key={idx}/>
      );
    });
  },
  render: function(){
    return(
      <div className="Organ">
        <div className="Octave1">
          {this.keys1()}
        </div>
        <div className="Octave2">
          {this.keys2()}
        </div>
      </div>
    );
  }

});
