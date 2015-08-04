Tour = function(attributes){
  this.installations = [];
  this.setAttributes(attributes);
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
    installation_ids: this.installations.map(TO_ID),
  };
};

TO_ID = function(x){ return x.id };


Tour.prototype.addInstallation = function(installation){
  this.installations.push(installation);
  return this;
}

Tour.find = function(tour_id){
  return App.request('get', '/tours/'+tour_id).then(function(attributes){
    return new Tour(attributes);
  });
};

// Tour.prototype.create = function(){
//   var tour = this;
//   return App.request('post','/tours').then(function(attributes){
//     // Object.assign(tour, attributes);
//     tour
//   });
// };

Tour.prototype.save = function(){
  var tour = this
  var params = {tour: this.attributes()};
  return App.request('post', '/tours', params).then(function(attributes){
    tour.setAttributes(attributes);
    return tour;
  });
};

