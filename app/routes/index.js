var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  }
});

export default IndexRoute;
