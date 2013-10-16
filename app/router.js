var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('home');
  this.resource('user', { queryParams: ['query'] }, function() {
    this.resource('card', { path: ':user_id' });
  });
});

export default Router;
