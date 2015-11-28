Template.UpdateProfile.helpers({

  email: function() {
    return this.emails[0].address
  },

  fieldCheck: function(field) {
    return _.contains(this.subjects, field) ? 'checked' : '';
  },

  isTutorCheck: function() {
    return this.isTutor ? 'checked' : '';
  },

  displayTutorInfo: function() {
    return this.isTutor ? 'block' : 'none';
  }

});


Template.UpdateProfile.events({

  'submit #image': function(e) {
    e.preventDefault();

    var file = $('#profileImage').get(0).files[0];

    if (file) {
      var fsFile = new FS.File(file);

      ProfileImages.insert(fsFile, function(err, result) {
        if (err) {
          throw new Meteor.Error(err)
        } else {
          var imageUrl = '/cfs/files/ProfileImages/' + result._id;

          UserImages.insert({
            userId: Meteor.userId(),
            image: imageUrl,
            createdAt: new Date
          });
        }
      });
    }
  },

  'submit #update': function(e) {
    e.preventDefault();

    var doc = {
      'emails.0.address': $(e.target).find('[name=email]').val(),
      name: $(e.target).find('[name=name]').val(),
      price: $(e.target).find('[name=price]').val(),
      location: $(e.target).find('[name=location]').val(),
      summary: $(e.target).find('[name=summary]').val()
    };

    alert('Profile Updated!');

    Meteor.users.update( Meteor.userId(), {$set: doc} )
  },

  'change #isTutor': function() {
    var checked = this.isTutor;
    var operator = checked ? {$set: {isTutor: false}} : {$set: {isTutor: true}};
    Meteor.users.update( Meteor.userId(), operator);
  },

  'change #math': function() {
    var checked = _.contains(this.subjects, 'math');
    var operator = checked ? { $pull: {subjects: 'math'} } : { $addToSet: {subjects: 'math' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

  'change #econ': function() {
    var checked = _.contains(this.subjects, 'econ');
    var operator = checked ? { $pull: {subjects: 'econ'} } : { $addToSet: {subjects: 'econ' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

  'change #chem': function() {
    var checked = _.contains(this.subjects, 'chem');
    var operator = checked ? { $pull: {subjects: 'chem'} } : { $addToSet: {subjects: 'chem' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

  'change #english': function() {
    var checked = _.contains(this.subjects, 'english');
    var operator = checked ? { $pull: {subjects: 'english'} } : { $addToSet: {subjects: 'english' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

  'change #web': function() {
    var checked = _.contains(this.subjects, 'web');
    var operator = checked ? { $pull: {subjects: 'web'} } : { $addToSet: {subjects: 'web' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

  'change #stat': function() {
    var checked = _.contains(this.subjects, 'stat');
    var operator = checked ? { $pull: {subjects: 'stat'} } : { $addToSet: {subjects: 'stat' }};
    Meteor.users.update( Meteor.userId(), operator );
  },

});