var Key = React.createClass({
  getInitialState: function(){
    return {noteName: new Note(window.TONES[this.props.freq]), pressed: KeyStore.all()};
  },
  componentDidMount: function(){
    KeyStore.addKeyListChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({pressed: KeyStore.all()});
  },

  render: function(){
    if (this.state.pressed.indexOf(this.props.freq) >-1){
      return (
      <div className="key pressed">

      </div>
    );

    }
      return (
      <div className="key">

      </div>
  );
  }
});
