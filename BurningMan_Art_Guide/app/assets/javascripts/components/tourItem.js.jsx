var TourItem = React.createClass({

  render: function(){
    return (
      <div className="installation_wrapper">
        <h4>{this.props.installation_name}</h4>
        <img src={this.props.photo_url} className="installation_img"></img>
      </div>
      )
  }
})