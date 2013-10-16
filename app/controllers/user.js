import { generateResults } from 'appkit/utils/misc';

var UserController = Ember.ArrayController.extend({
  query: '',

  queryDidChange: function() {
    var query = this.get('query') || '',
        results = generateResults(query);

    this.set('content', results);
  }.observes('query')
});

export default UserController;
