(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

// Static pages

Router.route('/', {name: 'home'});

Router.route('/about', {name: 'about'});

Router.route('/privacyPolicy', {name: 'privacyPolicy'});

Router.route('/vtr/new', {name: 'newVtr'});

Router.route('/vtr/list', {
  name: 'listVtr',
  waitOn: function() {
        return [Meteor.subscribe('myVtrs'),
                Meteor.subscribe('dzVtrs'),
                Meteor.subscribe('AllVtrs')];
  }
});

Router.route('/vtr/export', {
  name: 'exportVtr',
  waitOn: function() {
        return [Meteor.subscribe('myVtrs'),
                Meteor.subscribe('dzVtrs'),
                Meteor.subscribe('AllVtrs')];
  }
});

Router.route('/vtr/:_id', {
  name: 'viewVtr',
  waitOn: function() {
        return [Meteor.subscribe('myVtrs'),
                Meteor.subscribe('dzVtrs'),
                Meteor.subscribe('AllVtrs')];
  },
  data: function() { return Vtr.findOne(this.params._id);}
});



Router.route('/vtr/:_id/edit', {
  name: 'editVtr',
  waitOn: function() {
        return [Meteor.subscribe('myVtrs'),
                Meteor.subscribe('dzVtrs'),
                Meteor.subscribe('AllVtrs')];
  },
  data: function() { return Vtr.findOne(this.params._id);}
});

Router.route('/dropzone/new', {name: 'newDropzone'});

Router.route('/dropzone/list', {name: 'listDropzones'});

Router.route('/dropzone/:_id/edit', {
  name: 'editDropzone',
  data: function() { return Dropzones.findOne(this.params._id);}
});

})();

// Pages that need login

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('home');
      } else {
        this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['newVtr', 'editVtr', 'viewVtr', 'listVtr','listDropzones','newDropzone','editDropzone']
});