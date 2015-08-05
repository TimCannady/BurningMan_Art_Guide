var TourList = React.createClass({

  installations: function(){
    var tour = this.props.tour
    var installations = this.props.installations
    return tour.installation_ids.map(function(id){
      return installations.find(function(installation){
        return installation.id == id;
      })
    });
  },

  render: function(){
    console.log('RERENDERING RoutList', this.state, this.props)
    var tourInstallations, tour = this.props.tour;

    if (tour){
      tourInstallations = this.installations().map(function(installation,index){
        return React.createElement(TourItem,{
          key: index,
          tour: tour,
          installation: installation
        });
      });
    }

    return(
      <div className="TourList">
        {tourInstallations}
      </div>
    );
  }
});
