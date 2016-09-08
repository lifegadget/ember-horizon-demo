import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newMessage(item) {
      console.log(item);
    }
  }
});
