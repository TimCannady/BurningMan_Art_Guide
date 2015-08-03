var App = React.createClass({

  getInitialState: function(){
    return {
      tourGuide: [],
      createdTour: false
    }
  },

  addToTourGuide: function(item){
    this.state.tourGuide.push(item);
    this.setState({tourGuide: this.state.tourGuide})
  },

  createTour: function(tour){
    this.state.createdTour = true;
    this.setState({createdTour: this.state.createdTour});
  },


  render: function(){
    return (
      <div>
        <InstallationList installations={this.props.installations} addToTourGuide={this.addToTourGuide} createdTour={this.state.createdTour} />



        <TourList installations={this.state.tourGuide} createTour={this.createTour} />
      </div>
    );
  }
});
