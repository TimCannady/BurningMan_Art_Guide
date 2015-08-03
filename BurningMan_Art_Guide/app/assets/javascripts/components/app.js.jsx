var App = React.createClass({

  getInitialState: function(){
    return {
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


App.router = function(path){
  if (path === '/')                   return <HomePage />;
  if (path === '/tours/new')          return <NewTourPage />;
  if (path.match(/^\/tours\/(\d+)$/)) return <TourShowPage tour_id={RegExp.$1} />;
};
