var later = Ember.run.later,
    HomeController;

HomeController = Ember.Controller.extend({
  date: null,

  tick: function() {
    this.set('date', new Date());

    later(this, this.tick, 1000);
  }.on('init')
});

export default HomeController;
