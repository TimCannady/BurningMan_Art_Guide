TourShowPage = React.createClass({

  propTypes:{
    tour_id: React.PropTypes.string.isRequired,
  },

  getInitialState: function(){
    return {
      tour: null,
      tour_installations: null
    }
  },

 /*--- Tour.find is a method defined in Tour.js ---*/
  componentDidMount: function(){
    var component = this
    Tour.find(this.props.tour_id).then(function(tour){
      component.setState({tour: tour});
    });
    TourInstallations.find(this.props.tour_id).then(function(tour_installations){
      component.setState({tour_installations: tour_installations});
    });
  },

  render: function(){
    var content;
    if (this.state.tour){
      content = <UsersTour tour={this.state.tour} tour_installations={this.state.tour_installations} installation_name={this.state.tour.installation_name} photo_url={this.state.tour.photo_url} />;
    }else{
      content = <div>Loading...</div>;
    }
    return (
      <div class="tour-show-page">
        tour: {this.state.tour}
        <br/>
        installations: {this.state.tour_installations}
        {content}
      </div>
    )
  }
});

