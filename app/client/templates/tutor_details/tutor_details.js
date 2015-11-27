Template.TutorDetails.helpers({

  subjectList: function() {
    var subjectText = {
      math: "Math",
      econ: "Econ",
      chem: 'Chemistry',
      english: 'English',
      web: 'Web Design',
      stat: 'Statistics'
    };

    var subjectTextArray = _.map(this.subjects, function(subject) {
      return subjectText[subject]
    });

    return subjectTextArray.join(', ');
  },

  myJobs: function() {
    var userId = Meteor.user()._id;

    return Jobs.find({userId: userId}, {sort: {submitted: -1}});
  },

  tutorName: function(id) {
    return Meteor.users.findOne(id).name;
  },

  submitted_readable: function(date) {
    return moment(date).format('DD/MM/YYYY');
  }

});

Template.TutorDetails.events({
  'click .book': function(e) {
    e.preventDefault();

    var jobId = $(e.target).data('job');
    var tutorId = Session.get('tutor_id');
    Jobs.update(jobId, {$set: {tutorId: tutorId}})
  }
});