Tour = function(attributes){
  this.installation_ids = [];
  this.setAttributes(attributes);
};

Tour.prototype.installations = function(attributes){
  var tour = this;
  if (this.installation_ids.length === 0){ return Promise.resolve([]); }
  if (tour._installations) { return Promise.resolve(tour._installations); }
  return Installation.find(this.installation_ids).then(function(installations){
    return tour._installations = installations;
  });
};


Tour.prototype.setAttributes = function(attributes){
  $.extend(this, attributes);
  return this;
};

Tour.prototype.isPersisted = function(){
  return !!this.id;
};

Tour.prototype.attributes = function(){
  return {
    id: this.id,
    installation_ids: this.installation_ids,
  };
};

TO_ID = function(x){ return x.id };

Tour.prototype.addInstallation = function(installation){
  this.installation_ids.push(installation.id);
  if (this._installations){
    this._installations.push(installation);
  }
  return this;
}

Tour.find = function(tour_id){
  return App.request('get', '/tours/'+tour_id).then(function(attributes){
    return new Tour(attributes);
  });
};

Tour.prototype.save = function(){
  var tour = this
  var params = {tour: this.attributes()};
  return App.request('post', '/tours', params).then(function(attributes){
    console.log(attributes)
    tour.setAttributes(attributes);
    return tour;
  });
};
