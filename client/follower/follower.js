Session.setDefault('searching', false);

  Tracker.autorun(function() {
    if (Session.get('query')) {
      var searchHandle = Meteor.subscribe('dribbbleMemberFollowers', Session.get('query'));
      Session.set('searching', ! searchHandle.ready());
    }
  });

  Template.searchfollower.events({
    'submit form': function(event, template) {
      event.preventDefault();
      var query = template.$('input[type=text]').val();
      if (query)
        Session.set('query', query);
    }
  });

  Template.searchfollower.helpers({
    followers: function() {
      return Followers.find();
    },
    searching: function() {
      return Session.get('searching');
    }
  });