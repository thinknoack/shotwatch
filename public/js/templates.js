app.templates = {};

app.templates.main = _.template(
  '<div id="shot-list" class="clearfix"></div>'+
  '<div id="shot-info" class="clearfix"></div>'
);

app.templates.bbShotItem = _.template(
  '<button data-toggle="modal" data-target="#ge-id-{{gameEventID}}" class="shot {{outcomeSlug}}" style="left:{{shotX}}px; top:{{shotY}}px" ></div>'
);
app.templates.bbShotInfoItem = _.template(
  '<div class="modal fade" id="ge-id-{{attributes[2]}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
  '<div class="modal-dialog">'+
  '<div class="modal-content">'+
  '<div class="modal-header">'+
  '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
  '<h4 class="modal-title" id="myModalLabel">{{attributes[10]}}</h4>'+
  '</div>'+
  '<div class="modal-body">'+
      '<p><b>{{headers[0]}} </b><br>{{attributes[0]}}</p>'+
      '<p><b>{{headers[1]}} </b><br>{{attributes[1]}}</p>'+
      '<p><b>{{headers[2]}} </b><br>{{attributes[2]}}</p>'+
      '<p><b>{{headers[3]}} </b><br>{{attributes[3]}}</p>'+
      '<p><b>{{headers[4]}} </b><br>{{attributes[4]}}</p>'+
      '<p><b>{{headers[5]}} </b><br>{{attributes[5]}}</p>'+
      '<p><b>{{headers[6]}} </b><br>{{attributes[6]}}</p>'+
      '<p><b>{{headers[7]}} </b><br>{{attributes[7]}}</p>'+
      '<p><b>{{headers[8]}} </b><br>{{attributes[8]}}</p>'+
      '<p><b>{{headers[9]}} </b><br>{{attributes[9]}}</p>'+
      '<p><b>{{headers[10]}}</b><br>{{attributes[10]}}</p>'+
      '<p><b>{{headers[11]}}</b><br>{{attributes[11]}}</p>'+
      '<p><b>{{headers[12]}}</b><br>{{attributes[12]}}</p>'+
      '<p><b>{{headers[13]}}</b><br>{{attributes[13]}}</p>'+
      '<p><b>{{headers[14]}}</b><br>{{attributes[14]}}</p>'+
      '<p><b>{{headers[15]}}</b><br>{{attributes[15]}}</p>'+
      '<p><b>{{headers[16]}}</b><br>{{attributes[16]}}</p>'+
      '<p><b>{{headers[17]}}</b><br>{{attributes[17]}}</p>'+
      '<p><b>{{headers[18]}}</b><br>{{attributes[18]}}</p>'+
      '<p><b>{{headers[19]}}</b><br>{{attributes[19]}}</p>'+
      '<p><b>{{headers[20]}}</b><br>{{attributes[20]}}</p>'+
  '</div>'+
  '<div class="modal-footer">'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '<button type="button" class="btn btn-primary">Save changes</button>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'
);
