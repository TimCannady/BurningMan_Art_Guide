var TourItem = React.createClass({

  render: function(){
    return (
      <div className="tour_item_wrapper">
        <h5>{this.props.installation_name}</h5>
        <img src={this.props.photo_url} className="tour_img"></img>
      </div>
      )
  }
})