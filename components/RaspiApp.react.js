var React = require('react');

// export the RaspiApp component
module.exports = RaspiApp = React.createClass({

  // set the initial component state
  getInitialState: function(props) {
    props = props || this.props;

    return {
      foo: 'roar?'
    };
  },

  componentWillReceiveProps: function(newProps, oldProps) {
    this.setState(this.getInitialState(newProps));
  },

  // Called directly after component rendering, only on client
  componentDidMount: function() {

    // Preserve self reference
    var self = this;

    // Initialize socket.io
    // var socket = io.connect();

    // On tweet event emission...
    // socket.on('tweet', function(data) {

    // });
  },

  render: function() {
    return (
      <div className="raspi-app">
        <p>Hello there {this.state.foo}</p>
      </div>
    );
  }
});
