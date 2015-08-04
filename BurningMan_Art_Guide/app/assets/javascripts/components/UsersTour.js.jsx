UsersTour = React.createClass({

  render: function(){

    return (
      <div class="users-tour-show-page">
        <p> frogs</p>
        <p>installation name: {this.props.installation_name} </p>
        <img src={this.props.photo_url} className="installation_img">Installation Photo</img>
      </div>
    )
  }
});

