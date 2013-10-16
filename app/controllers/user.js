import { generateResults } from 'appkit/utils/misc';

var UserController = Ember.ArrayController.extend({
  query: '',

  queryDidChange: function() {
    var query = this.get('query'),
        results = generateResults(query);

    Ember.run.next(this, function() {
      this.send('updateRoute', query);
      this.set('model', results);
    });
  }.observes('query')
});

export default UserController;
