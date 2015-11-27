Template.registerHelper('getProfileImage', function(userId) {
  return UserImages.findOne({userId: userId}, {$sort: {createdAt: -1}}).image;
});