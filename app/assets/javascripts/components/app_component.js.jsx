var AppComponent = React.createClass({

  getInitialState: function(){
    return {
      //location.pathname is an HTML property that returns the pathname of the current url
      path: location.pathname,
    }
  },

  componentDidMount: function(){
    $(window).on('pushstate popstate', this.pathChange);
  },

  componentWillUnmount: function(){
    $(window).off('pushstate popstate', this.pathChange);
  },

  pathChange: function(){
    this.setState({path: location.pathname})
  },

  render: function(){
    return App.router(this.state.path);
  }
});

