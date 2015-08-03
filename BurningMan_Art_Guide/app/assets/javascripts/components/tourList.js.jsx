var TourList = React.createClass({

  render: function(){
    var tourInstallations, tour = this.props.tour;

    if (tour){
      tourInstallations = tour.installations.map(function(installation,index){
        // return React.createElement(RouteItem,{
        //   key: index,

        // });
          return <TourItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} />
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
