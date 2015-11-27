Template.TutorList.helpers({

  tutors: function() {
    var subject = Session.get('subject');
    var doc = subject ? {subjects: subject} : {};

    return Meteor.users.find(doc);
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
  }

});