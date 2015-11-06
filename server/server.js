if (Meteor.isServer) {
  Meteor.publish('dribbbleMemberFollowers', function(query) {
	var _this = this;
	try {
	  var response = HTTP.get('https://api.dribbble.com/v1/users/'+ query +'/followers?access_token=3e8f30d497769f1751d9eab867d96ac6ee0d3e1373ba5eace4894676e87dc483');
		_.each(response.data, function(item) {
			var doc = {
			  thumb: item.follower.avatar_url,
			  title: item.follower.name,
			  user_name:item.follower.username,
			  link: item.follower.html_url,
			  description: item.follower.bio
			};

			_this.added('followers', Random.id(), doc);
		});

	  _this.ready();

	} catch(error) {
	  console.log(error);
	}
  });

  Meteor.publish('dribbbleMember', function() {
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
	  var response = HTTP.get('https://api.dribbble.com/v1/users/jhonM/followers?access_token=3e8f30d497769f1751d9eab867d96ac6ee0d3e1373ba5eace4894676e87dc483');
	  	_.each(response.data, function(shot) {
	  		var shotData = {
	  			shot_name: shot.follower.name
	  		}
	  		
	  		_this.added('shots', Random.id(), shotData);
	  		console.log(shot.follower)
	  	});
	} catch(error) {
		console.log(error);
	}
  });
}


