var TourList = React.createClass({

  installations: function(){
    var tour = this.props.tour
    var installations = this.props.installations
    return tour.installation_ids.map(function(id){
      return installations.find(function(installation){
        return installation.id == id;
      })
    });
  },

  render: function(){
    console.log('RERENDERING RoutList', this.state, this.props)
    var tourInstallations, tour = this.props.tour;

    if (tour){
      tourInstallations = this.installations().map(function(installation,index){
        return React.createElement(TourItem,{
          key: index,
          tour: tour,
          installation: installation
        });
      });
    }

    return(
      <div className="TourList">
        {tourInstallations}
      </div>
    );
  }
});


// ---------Steps to save a tour----------- //
// when a user clicks the Save Tour button,
// the tourGuide state houses all the installations the user added to their tour.
// package that up and POST it to "/tours." This triggers the Tour controller where
// it will generate a new Tour object.
// I'm not sure how it will receive the tourGuide state. Format, params, etc.
// Create a new Tour object, redirect the user to the page and give them a link so
// they can return to it.
