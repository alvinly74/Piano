var Key = React.createClass({
  getInitialState: function(){
    return {note: new Note(window.TONES[this.props.freq]), pressed: KeyStore.all()};
  },
  componentDidMount: function(){
    KeyStore.addKeyListChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({pressed: KeyStore.all()});
    if (this.state.pressed.indexOf(window.TONES[this.props.freq]) >-1){
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
  },
  _className: function(){
    return "key " + this.props.form;
  },
  render: function(){
    if (this.state.pressed.indexOf(window.TONES[this.props.freq]) >-1){
      return (
      <div className={this._className() + " pressed"}>
        <p className="note">
        {String.fromCharCode(this.props.freq)}
        </p>
      </div>
    );

    }
      return (
      <div className={this._className()}>
        <p className="note">
        {String.fromCharCode(this.props.freq)}
        </p>
      </div>
  );
  }
});
