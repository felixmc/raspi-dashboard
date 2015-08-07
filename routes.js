var JSX = require('node-jsx').install();
var React = require('react');
var RaspiApp = require('./components/RaspiApp.react');

module.exports = {

  index: function(req, res) {
    var markup = React.renderToString(
      React.createElement(RaspiApp, {})
    );

    res.render('home', {
      markup: markup,
      state: JSON.stringify({
        foo: 'bar'
      })
    });
  }

};
