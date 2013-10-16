var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('home');
  this.resource('user', { queryParams: ['query'] });
});

export default Router;
