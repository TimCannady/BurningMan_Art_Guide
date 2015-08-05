TourShowPage = React.createClass({

  propTypes:{
    tour_id: React.PropTypes.string.isRequired,
  },

  getInitialState: function(){
    return {
      tour: null,
      installations: null
    }
  },

  componentDidMount: function(){
    var component = this
    Tour.find(this.props.tour_id).then(function(tour){
      component.setState({tour: tour});
      tour.installations().then(function(installations){
        component.setState({installations: installations});
      });
    });

  },

  render: function(){
    var content;
    if (this.state.installations){
      var tour = this.state.tour
      content = this.state.installations.map(function(installation, index){
        return React.createElement(InstallationItem,{
          key: index,
          tour: tour,
          installation: installation
        })
      })
    }else{
      content = <div>Loading...</div>;
    }
    console.log('TourShowPage rendered', this.state, this.props)
    return (
      <div class="tour-show-page">
        {content}
      </div>
    )
  }
});

