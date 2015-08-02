var App = React.createClass({
  render: function(){
    return (
      <div>
        <InstallationList installations={this.props.installations} />
        <TourList/>
      </div>
    );
  }
});
