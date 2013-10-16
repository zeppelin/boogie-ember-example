var CardRoute = Ember.Route.extend({

  model: function(params) {
    var user = {
      id: params.user_id
    };
    return user;
  },

  renderTemplate: function() {
    this.render({
      into: 'application',
      outlet: 'modal'
    });
  }
});

export default CardRoute;
