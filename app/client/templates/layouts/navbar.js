Template.navbar.events({
  'click #logout': function() {
    AccountsTemplates.logout();
  }
});

Template.navbar.helpers({
  isActive: function(link) {
    //alert(Router.current().route.path(this) + ':' + link);
    var currentPath = Router.current().route.path(this).toString();
    console.log(currentPath + ' : ' + link);
    return link == currentPath ? 'active' : '';
  }
});