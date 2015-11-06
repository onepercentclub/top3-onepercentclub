if (Meteor.isServer) {
    Projects = new Mongo.Collection('Projects');
    Meteor.publish('projects', function(query) {});
	var _this = this;
	try {
		var response = HTTP.get('https://api.dribbble.com/v1/user?access_token=3e8f30d497769f1751d9eab867d96ac6ee0d3e1373ba5eace4894676e87dc483');
		var memberData = {
			full_name: response.data.name,
			user_name: response.data.username,
			thumb: response.data.avatar_url
		}
		_this.added('member', Random.id(), memberData);


	} catch(error) {
		console.log(error);
	}
  });

  Meteor.publish('dribbbleShots', function() {
	var _this = this;
	try {
	  var response = HTTP.get('https://www.onepercentclub.com/api/bb_projects/previews/?ordering=popularity&page=1&page_size=3&_=1446812641378');
	  	_.each(response.data.results, function(shot) {
	  		var projectData = {
	  			project_name: shot.title,
	  			amount_donated: shot.amount_donated,
	  			image: shot.image
	  		}
	  		
	  		_this.added('shots', Random.id(), projectData);
	  	});
	} catch(error) {
		console.log(error);
	}
  });
}
