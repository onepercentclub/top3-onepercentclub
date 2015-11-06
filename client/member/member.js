Meteor.subscribe('dribbbleMember');

Template.member.helpers({
    member: function() {
        return Member.find();
    }
})