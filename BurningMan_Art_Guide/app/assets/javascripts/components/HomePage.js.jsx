HomePage = React.createClass({

  getInitialState: function(){
    return {
      installations: null,
      tour: null,
    }
  },

  componentDidMount: function(){
    $.getJSON('/installations').then(function(installations){
      this.setState({installations: installations})
    }.bind(this));
  },

  addToTourGuide: function(installation){
    this.state.tour.addInstallation(installation);
    this.forceUpdate();
  },

  createTour: function(tour){
    this.setState({tour: new Tour});
  },
  saveTour: function(tour){
    this.state.tour.save().then(function(tour){
      this.forceUpdate();
    }.bind(this))
  },

  render: function(){

    return (
      <div class="home-page">
        <div className="col-md-8 installation_box">
          <h3>Art Installations</h3>
          {this.renderInstallations()}
        </div>

        <div className="col-md-4 tour_box">
          <h3>My Tour Guide</h3>
          <div>
            <ActionLink className="create_tour_button btn btn-info" onClick={this.createTour}>Create Tour</ActionLink>
            <ActionLink className="add_tour_button btn btn-info" onClick={this.saveTour}>Save Tour</ActionLink>
          </div>
          <TourList tour={this.state.tour} />
        </div>

      </div>
    )
  },

  renderInstallations: function(){
    if (this.state.installations === null) return 'Loading...';
    return (
      <InstallationList tour={this.state.tour} installations={this.state.installations} addToTourGuide={this.addToTourGuide} />
    );
  }
})


Tour = function(){
  this.installations = [];
  this.persisted = false;
};

Tour.prototype.addInstallation = function(installation){
  this.installations.push(installation);
  return this;
}

Tour.prototype.save = function(){
  return $.ajax({
    method: 'post',
    url: '/tours',
    dataType: 'json',
  }).then(function(tour){
    this.persisted = true
    debugger
  }.bind(this))
};

