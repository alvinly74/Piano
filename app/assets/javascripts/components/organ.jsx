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
  keys: function(){
    return Object.keys(window.TONES).map(function(el){
      return(
        <Key freq={el} key={el}/>
      );
    });
  },

  render: function(){
    return(
      <div className="Organ">
        {this.keys()}
      </div>
    );
  }

});
