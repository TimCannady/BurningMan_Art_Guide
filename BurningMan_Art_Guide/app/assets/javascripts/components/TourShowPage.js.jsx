TourShowPage = React.createClass({

  propTypes:{
    tour_id: React.PropTypes.string.isRequired,
  },

  render: function(){
    return (
      <div class="tour-show-page">
        <h1>Showing Tour: {this.props.tour_id}</h1>
      </div>
    )
  }
});

