Tour = function(attributes){
  // this.installations = [];
  this.installation_ids = [];
  this.setAttributes(attributes);
};

// Usage tour.installations().then(function(installations){ … })
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

// TourInstallations.find = function(tour_id){
//   return App.request('get', '/tours_installations/'+tour_id).then(function(attributes){
//     return new TourInstallation(attributes)
//   })
// };


Tour.prototype.save = function(){
  var tour = this
  var params = {tour: this.attributes()};
  debugger
  return App.request('post', '/tours', params).then(function(attributes){
    console.log(attributes)
    tour.setAttributes(attributes);
    return tour;
  });
};



// Tour.prototype.create = function(){
//   var tour = this;
//   return App.request('post','/tours').then(function(attributes){
//     // Object.assign(tour, attributes);
//     tour
//   });
// };


