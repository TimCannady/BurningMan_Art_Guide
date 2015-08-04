Tour = function(attributes){
  // this.installations = [];
  this.installation_ids = [];
  this.setAttributes(attributes);
};

Tour.prototype.installations = function(attributes){
  return this.installation_ids.map(function(id){
    return {id:id}
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


