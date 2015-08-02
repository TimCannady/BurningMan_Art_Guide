var App = React.createClass({
  request: function(action, method, data){
     return new Promise(function(resolve, reject){
       request = $.ajax({
         url:      action,
         method:   method,
         data:     data,
         dataType: "json"
       });

       request.done(function(serverData){
         resolve(serverData)
       });

       request.fail(function(serverData){
         reject(serverData)
       });
     });
   },

  render: function(){
    return (
      <div>
        <InstallationList installations={this.props.installations}/>
        {/*<InstallationList installations={this.request}/>*/}
        {/*<TourList/>*/}
      </div>
    );
  }
});
