var TourList = React.createClass({

  getInitialState: function(){
    return{ tourGuide: [] }
  },

  addToTourGuide: function(item){
    this.state.tourGuide.push(item);
    this.setState({currentTeam: this.state.currentTeam})
  },

  render: function(){
    return(
      <div className="col-md-4 tour_box">
        <h3>My Tour Guide</h3>
      </div>
      );
  }
});