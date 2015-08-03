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

  /*request: function(action, method, data){
     return new Promise(function(resolve, reject){
       request = $.ajax({
         url:      action,
         method:   method,
         data:     data,
         dataType: "json"
       });

       request.done(function(serverData){
         resolve(serverData)
       });

       request.fail(function(serverData){
         reject(serverData)
       });
     });
   },*/

  render: function(){
    return (
      <div>
        <InstallationList installations={this.props.installations} addToTourGuide={this.addToTourGuide} createdTour={this.state.createdTour} />
        <TourList installations={this.state.tourGuide} createTour={this.createTour} />
      </div>
    );
  }
});
