var InstallationList = React.createClass({
  render: function(){

    {/*var artInstallations =  this.props.installations*/}
    artInstallations = this.props.installations.map(function(installation){
        return <InstallationItem installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} />
    })


    return (
        <div className="installation_wrapper">
          {artInstallations}
          {/*<InstallationItem installations={artInstallations} />*/}
        </div>
      );
  }
});


{/* <InstallationItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} /> */}