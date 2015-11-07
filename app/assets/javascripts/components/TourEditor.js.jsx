TourEditor = React.createClass({

  propTypes:{
    tour: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    // console.log('tour:', this.props.tour)
    return {
      installations: null,
      tour: this.props.tour,
    }
  },

  componentDidMount: function(){
    // I think this routes to installations#index
    $.getJSON('/installations').then(function(installations){
      this.setState({installations: installations})
    }.bind(this));
  },

  addToTourGuide: function(installation){
    this.state.tour.addInstallation(installation);
    this.forceUpdate();
  },

  createTour: function(tour){
    this.setState({tour: new Tour})
    this.forceUpdate();
  },

  saveTour: function(tour){
    this.state.tour.save().then(function(tour){
      App.goto('/tours/'+tour.id);
    })
  },

  renderInstallations: function(){
    if (this.state.installations === null) return 'Loading...';
    return (
      <InstallationList tour={this.state.tour} installations={this.state.installations} addToTourGuide={this.addToTourGuide} />
    );
  },

  renderNewTourButton: function(){
    if (this.state.tour) return;
    return (
      <ActionLink className="create_tour_button btn btn-info" href="/tours/new"> New Tour </ActionLink>
    );
  },

  renderCreateOrSaveButton: function(){
    if (!this.state.tour) return;
    action = this.state.tour.isPersisted() ? 'Save' : 'Create'
    return (
      <ActionLink className="add_tour_button btn btn-info" onClick={this.saveTour}> {action} Tour</ActionLink>
    );
  },

  render: function(){
    return (

      <div class="TourEditor">

        <div className="col-md-8 installation_box">  {/* ------INSTALLATIONS LIST--------- */}
          <h3>Art Installations</h3>
          {this.renderInstallations()}
        </div>

        <div className="col-md-4 tour_box">  {/* ---------TOUR LIST----------- */}
          <h3>My Tour Guide</h3>
          <div>
            {this.renderNewTourButton()}
            {this.renderCreateOrSaveButton()}
          </div>
          <TourList tour={this.state.tour} installations={this.state.installations} />
        </div>

      </div>
    )
  }

});


