Meteor.publish('projects', function() {
    var _this = this;
    try {
        var response = HTTP.get('https://www.onepercentclub.com/api/bb_projects/previews/?ordering=-amount_donated&page=1&page_size=3&_=1446812641378');
        _.each(response.data.results, function(shot) {
            var projectData = {
                project_name: shot.title,
                amount_donated: shot.amount_donated,
                image: shot.image
            }

            _this.added('projects', Random.id(), projectData);
        });
    } catch (error) {
        console.log(error);
    }
});
