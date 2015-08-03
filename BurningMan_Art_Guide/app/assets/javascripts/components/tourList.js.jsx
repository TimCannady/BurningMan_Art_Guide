var TourList = React.createClass({

  handleClick: function(){
    this.props.createTour({createdTour: true});
  },

  render: function(){
    that = this;
    var artInstallations = this.props.installations.map(function(installation,index){
        return <TourItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} addToTourGuide={that.addToTourGuide} />
    })

    return(
      <div className="col-md-4 tour_box">
        <div>
          <h3>My Tour Guide</h3>

          <form /*action="#" method="POST"*/>
            <input type="submit" value="Create Tour" className="create_tour_button btn btn-info" onClick={this.handleClick}></input>
          </form>

         <button type="button" className="add_tour_button btn btn-info" onClick={this.handleClick}>Save Tour</button>

        </div>
        {artInstallations}
      </div>
      );
  }
});