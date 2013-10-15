var NavItemComponent = Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  activeBinding: 'link.active'
});

export default NavItemComponent;
