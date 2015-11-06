if (Meteor.isClient) {
  Followers = new Mongo.Collection('followers');
  Member = new Mongo.Collection('member');
  Shots = new Mongo.Collection('shots');
}