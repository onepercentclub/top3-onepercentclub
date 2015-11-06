Meteor.subscribe('dribbbleShots');

Template.shots.helpers({
    shots: function() {
        return Shots.find();
    }
});