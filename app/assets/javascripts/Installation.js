Installation = function(attributes){
  this.setAttributes(attributes);
}

Installation.prototype.setAttributes = function(attributes){
  $.extend(this, attributes);
  return this;
};

Installation.find = function(ids){
  var params = {};
  params.installation_ids = Array.isArray(ids) ? ids : [ids];
  return App.request('get', '/installations', params);
};
