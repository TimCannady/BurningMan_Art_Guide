var InstallationList = React.createClass({

  render: function(){
    var tour = this.props.tour
    var addToTourGuide = this.props.addToTourGuide
    var artInstallations = this.props.installations.map(function(installation, index){
        return React.createElement(InstallationItem,{
          key: index,
          tour: tour,
          installation: installation,
          addToTourGuide: addToTourGuide,
        })
    })

    return (
      <div class="InstallationList">
        {artInstallations}
      </div>
    );
  }
});

