app.Router = Backbone.Router.extend({
    routes: {
        // "search/": "search",
        "": "index" // Backbone will try to match the route above first
    },

  index: function() { 
    //create the collection
    app.bbShotResultsView = new app.BBShotResultsView({collection: app.bbShotCol});
      //add the data to the collection
      app.bbShotCol.add(app.bbshotdata.resultSets[0].rowSet);
      //render
      app.bbShotResultsView.render();      
  },
  // search: function() {
  //   //create the collection
  //   $('#my-app').addClass('is-hidden');
  //   setTimeout(function() {
  //   $('#my-app').removeClass('is-hidden');
  //   app.searchView = new app.SearchView({collection: app.searchCol});
  //   app.searchView.render();   
  //   }, 700);    
  // }
});


var ytKey = 'AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'
var ytUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet'

app.router = new app.Router;


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

