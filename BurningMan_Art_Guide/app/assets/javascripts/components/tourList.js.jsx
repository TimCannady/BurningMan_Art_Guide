var TourList = React.createClass({

  handleClick: function(){
    this.props.createTour({createdTour: true});
  },

  render: function(){
    that = this;
    var tourInstallations = this.props.installations.map(function(installation,index){
        return <TourItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link}  />
    })

    return(
      <div className="col-md-4 tour_box">
        <h3>My Tour Guide</h3>
        <div>

          <form action="#" /*method="post"*/>
            <input type="button" /*type="action"*/ value="Create Tour" className="create_tour_button btn btn-info" onClick={this.handleClick}></input>
          </form>

         <button type="button" className="add_tour_button btn btn-info" onClick={this.handleClick}>Save Tour</button>

        </div>
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
