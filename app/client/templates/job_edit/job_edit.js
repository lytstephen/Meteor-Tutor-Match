/*****************************************************************************/
/* JobEdit: Event Handlers */
/*****************************************************************************/
Template.JobEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var postId = this._id;

    var post = {
      title: $(e.target).find('[name=title]').val(),
      location: $(e.target).find('[name=location]').val(),
      price: $(e.target).find('[name=price]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    Jobs.update(postId, {
      $set: post
    });

    Router.go('/job_details/' + postId);
  },


  'change #math': function() {
    var checked = _.contains(this.subjects, 'math');
    var operator = checked ? { $pull: {subjects: 'math'} } : { $addToSet: {subjects: 'math' }};
    Jobs.update( this._id, operator );
  },

  'change #econ': function() {
    var checked = _.contains(this.subjects, 'econ');
    var operator = checked ? { $pull: {subjects: 'econ'} } : { $addToSet: {subjects: 'econ' }};
    Jobs.update( this._id, operator );
  },

  'change #chem': function() {
    var checked = _.contains(this.subjects, 'chem');
    var operator = checked ? { $pull: {subjects: 'chem'} } : { $addToSet: {subjects: 'chem' }};
    Jobs.update( this._id, operator );
  },

  'change #english': function() {
    var checked = _.contains(this.subjects, 'english');
    var operator = checked ? { $pull: {subjects: 'english'} } : { $addToSet: {subjects: 'english' }};
    Jobs.update( this._id, operator );
  },

  'change #web': function() {
    var checked = _.contains(this.subjects, 'web');
    var operator = checked ? { $pull: {subjects: 'web'} } : { $addToSet: {subjects: 'web' }};
    Jobs.update( this._id, operator );
  },

  'change #stat': function() {
    var checked = _.contains(this.subjects, 'stat');
    var operator = checked ? { $pull: {subjects: 'stat'} } : { $addToSet: {subjects: 'stat' }};
    Jobs.update( this._id, operator );
  },
});

/*****************************************************************************/
/* JobEdit: Helpers */
/*****************************************************************************/
Template.JobEdit.helpers({
  fieldCheck: function(field) {
    return _.contains(this.subjects, field) ? 'checked' : ''
  }
});

/*****************************************************************************/
/* JobEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.JobEdit.onCreated(function () {

});

Template.JobEdit.onRendered(function () {
});

Template.JobEdit.onDestroyed(function () {
});
