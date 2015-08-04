NewTourPage = React.createClass({
  render: function(){
    return (
      <div className="NewTourPage">
        <TourEditor tour={new Tour} />
      </div>
    );
  }
});
