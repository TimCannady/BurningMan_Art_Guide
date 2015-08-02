var InstallationList = React.createClass({
  render: function(){

    artInstallations = this.props.installations.map(function(installation){
        return <InstallationItem installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} />
    })

    return (
        <div className="col-md-8 installation_box">
          <h3>Art Installations</h3>
          {artInstallations}
        </div>
      );
  }
});

