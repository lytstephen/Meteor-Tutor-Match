Meteor.publish('jobs', function () {
  return Jobs.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
});

Meteor.publish('profileImages', function() {
  return ProfileImages.find();
});

Meteor.publish('userImages', function() {
  return UserImages.find();
});

Meteor.publish('applications', function() {
  return Applications.find();
});