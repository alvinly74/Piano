var Key = React.createClass({
  getInitialState: function(){
    return {note: new Note(window.TONES[this.props.freq]), pressed: KeyStore.all()};
  },
  componentDidMount: function(){
    KeyStore.addKeyListChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({pressed: KeyStore.all()});
    if (this.state.pressed.indexOf(this.props.freq) >-1){
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
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
