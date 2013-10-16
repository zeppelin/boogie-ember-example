var UserRoute = Ember.Route.extend({

  setupController: function(controller, context, queryParams) {
    controller.set('query', queryParams.query);
  },

  actions: {

    updateRoute: function(query) {
      if (query || query === '') {
        if (query.length === 0) {
          this.transitionTo({ queryParams: {query: false} });
        } else {
          this.replaceWith({ queryParams: {query: query} });
        }
      }
    }
  }
});

export default UserRoute;
