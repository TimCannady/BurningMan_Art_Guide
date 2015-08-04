var InstallationItem = React.createClass({

  propType: {
    tour: React.PropTypes.object.isRequired,
    installation: React.PropTypes.object.isRequired,
    addToTourGuide: React.PropTypes.func.isRequired,
  },

  handleClick: function(){
    this.props.addToTourGuide(this.props.installation)
  },

  render: function(){
    installation = this.props.installation
    return (
      <div className="installation_wrapper">
        <h4>{installation.installation_name}</h4>
        <img src={installation.photo_url} className="installation_img"></img>
        <h5>{installation.installation_description}</h5>
        <p>{installation.artist_name}</p>
        <p>{installation.artist_location}</p>
        <p>{installation.email}</p>
        <a href={installation.url}> Website </a>
        -
        <a href={installation.donate_link}> Donate </a>
        <br/>


        <button type="button" className="add_tour_button btn btn-info" onClick={this.handleClick} disabled={!this.props.tour} >
          Add To Tour Guide
        </button>


      </div>
      )
  }
})
