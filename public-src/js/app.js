var React = require('react');
var RaspiApp = require('../../components/RaspiApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
var app = React.render(React.createElement(RaspiApp), document.getElementById('react-app'));
app.setState(initialState);
