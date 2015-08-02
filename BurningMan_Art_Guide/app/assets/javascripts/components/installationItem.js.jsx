var InstallationItem = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.installation_name}</p>
        <img src={this.props.photo_url}></img>
        <p>{this.props.installation_description}</p>
        <p>{this.props.artist_name}</p>
        <p>{this.props.artist_location}</p>
        <p>{this.props.url}</p>
        <p>{this.props.email}</p>
        <p>{this.props.donate_link}</p>
      </div>
      )
  }
})