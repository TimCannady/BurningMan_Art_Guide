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

 /*--- Tour.find is a method defined in Tour.js ---*/
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
      var artInstallations = this.state.installations.map(function(installation, index){
        return React.createElement(InstallationItem,{
          key: index,
          tour: tour,
          installation: installation
        })
      })
      content = artInstallations
      // content = (
      //   <div>
      //     <h1>TOUR ID: {this.state.tour.id}</h1>
      //     <h3>with {this.state.installations.length} installations</h3>
      //   </div>
      // )
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

