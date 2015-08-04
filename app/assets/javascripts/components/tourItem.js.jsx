var TourItem = React.createClass({

  render: function(){
    var installation = this.props.installation;
    return (
      <div className="tour_item_wrapper">
        <h5>{installation.installation_name}</h5>
        <img src={installation.photo_url} className="tour_img"></img>
      </div>
      )
  }
})
