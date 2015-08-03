var InstallationList = React.createClass({

  addToTourGuide: function(item){
    this.props.addToTourGuide(item)
  },

  render: function(){
    var that = this;
    var artInstallations = this.props.installations.map(function(installation, index){
        return <InstallationItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} addToTourGuide={that.addToTourGuide} />
    })

    return (
        <div className="col-md-8 installation_box">
          {alert(this.props.createdTour)}
          <h3>Art Installations</h3>
          {artInstallations}
        </div>
      );
  }
});

