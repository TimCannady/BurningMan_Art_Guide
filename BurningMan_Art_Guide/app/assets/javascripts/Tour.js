Tour = function(){
  this.installations = [];
  this.persisted = false;
};

Tour.prototype.addInstallation = function(installation){
  this.installations.push(installation);
  return this;
}

Tour.prototype.save = function(){
  return $.ajax({
    method: 'post',
    url: '/tours',
    dataType: 'json',
  }).then(function(tour){
    this.persisted = true
    debugger
  }.bind(this))
};

