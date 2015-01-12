
///bbshotdata

app.BBShot = Backbone.Model.extend({});

app.BBShots = Backbone.Collection.extend({
  model: app.BBShot,
  comparator: 'cid',
});

app.bbShotCol = new app.BBShots();

app.BBShotListView = Backbone.View.extend({
  el: '#shot-list',
  initialize: function (opts) {
  },

  render: function () {
    var outputHtml = '';
    var data = {};
    this.collection.models.forEach(function (shot) {
      data.outcomeSlug = shot.attributes[10].split(' ').join('');
      data.shotX = shot.attributes[17]
      data.shotY = shot.attributes[18]
      data.gameEventID = shot.attributes[2]
   //    for (key in shot.attributes) {
			// data.attributes[key] = shot.attributes[key]
			// data.outcomeSlug = shot.attributes[10].split(' ').join('');
   //  	}
    	console.log(data.outcomeSlug)
    	
      //console.log();       
      outputHtml += app.templates.bbShotItem(data);
    });
    console.log('shots Were rendered');
    $(this.el).html(outputHtml);
  }
});

app.BBShotInfoView = Backbone.View.extend({
  el: '#shot-info',
  initialize: function (opts) {
    //app.searchCol.add('add', this.render, this); 
  },

  render: function () {
    var outputHtml = '';
    var data = {};
    this.collection.models.forEach(function (shot) {
      data.headers = ["GRID_TYPE", "GAME_ID", "GAME_EVENT_ID", "PLAYER_ID", "PLAYER_NAME", "TEAM_ID", "TEAM_NAME", "PERIOD", "MINUTES_REMAINING", "SECONDS_REMAINING", "EVENT_TYPE", "ACTION_TYPE", "SHOT_TYPE", "SHOT_ZONE_BASIC", "SHOT_ZONE_AREA", "SHOT_ZONE_RANGE", "SHOT_DISTANCE", "LOC_X", "LOC_Y", "SHOT_ATTEMPTED_FLAG", "SHOT_MADE_FLAG"]    
      data.attributes = [];
      for (key in shot.attributes) {
			data.attributes[key] = shot.attributes[key]
    	}    	
      //console.log();       
      outputHtml += app.templates.bbShotInfoItem(data);
    });
   	console.log('info was rendered');
    $(this.el).html(outputHtml);
  }
});


app.BBShotResultsView = Backbone.View.extend({
  el: '#my-app',
  initialize: function () {
  },
  render: function () {
    this.$el.html(app.templates.main);
    app.shotListView = new app.BBShotListView({collection: this.collection});
    app.shotListView.render();

    app.shotInfoView = new app.BBShotInfoView({collection: this.collection});
    app.shotInfoView.render();
  }
});

