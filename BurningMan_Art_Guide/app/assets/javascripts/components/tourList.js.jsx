var TourList = React.createClass({

  render: function(){
    that = this;
    var artInstallations = this.props.installations.map(function(installation,index){
        return <TourItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} addToTourGuide={that.addToTourGuide} />
    })

    return(
      <div className="col-md-4 tour_box">
        <div >
          <h3>My Tour Guide</h3>
          <a href="x">Save Tour</a>
        </div>
        {artInstallations}
      </div>
      );
  }
});