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
    return [["81","white"], ["50","black"], ["87","white"], ["51","black"],
            ["69","white"], ["82","white"], ["53","black"], ["84","white"],
            ["54","black"], ["89","white"], ["55","black"], ["85","white"],
            ["73","white"]].map(function(el, idx){
              return(
                <Key freq={el[0]} key={idx} form={el[1]}/>
              );
    });
  },

  keys2: function(){
    return [["67","white"], ["70","black"], ["86","white"], ["71","black"],
            ["66","white"], ["78","white"], ["74","black"], ["77","white"],
            ["75","black"],["188","white"],["76","black"], ["190","white"],
            ["191","white"]].map(function(el, idx){
              return(
                <Key freq={el[0]} key={idx} form={el[1]}/>
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
