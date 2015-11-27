/*****************************************************************************/
/* JobDetails: Event Handlers */
/*****************************************************************************/
Template.JobDetails.events({
  'submit #apply': function(e) {
    e.preventDefault();

    var application = {
      userId: Meteor.userId(),
      jobId: Session.get('_id'),
      description: $(e.target).find('[name=description]').val(),
      createdAt: new Date
    };

    Applications.insert(application);

    $(e.target).find('[name=description]').val('');
  },

  'click .tutor-details': function(e) {
    e.preventDefault();
    var tutorId = $(e.target).data('tutor');

    Router.go('/tutor_details/' + tutorId);
  },

  'click .book': function(e) {
    var tutorId = $(e.target).data('book');
    var jobId = Session.get('_id');

    Jobs.update(jobId, {$set: {tutorId: tutorId}});
  },

  'click .cancel-book': function(e) {
    var jobId = Session.get('_id');

    Jobs.update(jobId, {$unset: {tutorId: ""}});
  }
});

/*****************************************************************************/
/* JobDetails: Helpers */
/*****************************************************************************/
Template.JobDetails.helpers({
  submitted_readable: function() {
    return moment(this.createdAt).format('DD/MM/YYYY HH:MM');
  },

  ownPost: function() {
    return Meteor.userId() === this.userId;
  },

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

  applications: function() {
    return Applications.find({jobId: Session.get('_id')}, {$sort: {createdAt: -1}});
  },

  getTutorName: function(id) {
    return Meteor.users.findOne(id).name;
  },

  bookedTutorName: function(id) {
    return Meteor.users.findOne(id).name;
  }

});

/*****************************************************************************/
/* JobDetails: Lifecycle Hooks */
/*****************************************************************************/
Template.JobDetails.onCreated(function () {
});

Template.JobDetails.onRendered(function () {
});

Template.JobDetails.onDestroyed(function () {
});
