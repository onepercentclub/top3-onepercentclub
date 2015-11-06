if (Meteor.isServer) {
    Projects = new Mongo.Collection('Projects');
    Meteor.publish('projects', function(query) {});
}