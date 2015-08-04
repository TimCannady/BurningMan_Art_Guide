UsersTour = React.createClass({

  render: function(){

    return (
      <div className="users_tour_wrapper">
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
        </div>
    )
  }
});

