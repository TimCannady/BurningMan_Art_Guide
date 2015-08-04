App = {};

App.request = function(method, path, data){
  return new Promise(function(resolve, reject){
    var request = $.ajax({
      url:      path,
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
};


App.router = function(path){
  if (path === '/')                          return <HomePage />;
  if (path.match(/^\/tours\/new$/))          return <NewTourPage />;
  if (path.match(/^\/tours\/(\d+)\/edit$/))  return <TourEditPage  tour_id={RegExp.$1} />;
  if (path.match(/^\/tours\/(\d+)$/))        return <TourShowPage  tour_id={RegExp.$1} />;
  return(
    <h1>Page Not Found</h1>
  )
};

App.goto = function(path){
  history.pushState({}, '', path);
  $(window).trigger('pushstate');
};


