// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_tree .
//= require_self

  FAKE_INSTALLATIONS = [
    {
      installation_name: 'Tims Art Piece',
      installation_description: 'sweet art piece',
      artist_name: 'Tim Cannady',
      artist_location: 'san francisco',
      url: 'www.google.com',
      photo_url: 'http://galleries.burningman.org/include/../filestore/tmp/api_resource_cache/74689_8fe92287b623757df9699089a5d52a39.jpg',
      email: 'timcannady@gmail.com',
      donate_link: 'www.donate.com' }]


React.render( <App installations={FAKE_INSTALLATIONS} />, document.body);
