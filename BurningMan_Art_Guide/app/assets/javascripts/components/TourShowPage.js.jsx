TourShowPage = React.createClass({

  propTypes:{
    tour_id: React.PropTypes.string.isRequired,
  },

  getInitialState: function(){
    return {
      tour: null
    }
  },

  componentDidMount: function(){
    var component = this
    Tour.find(this.props.tour_id).then(function(tour){
      component.setState({tour: tour});
    });
  },

  render: function(){
    var content;
    if (this.state.tour){
      content = <UsersTour tour={this.state.tour} />;
    }else{
      content = <div>Loading...</div>;
    }
    return (
      <div class="tour-show-page">
        {content}
      </div>
    )
  }
});

