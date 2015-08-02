var InstallationList = React.createClass({
  render: function(){

    var nodes = this.props.installations

    return (
      <div>nodes: {nodes}</div>
      );
  }
});


{/* <InstallationItem key={index} installation_name={installation.installation_name} installation_description={installation.installation_description} artist_name={installation.artist_name} artist_location={installation.artist_location} url={installation.url} photo_url={installation.photo_url} email={installation.email} donate_link={installation.donate_link} /> */}