import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  tagName: '',
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('email', Ember.$('#new-message-input').val());
  },

  actions: {
    newMessage(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      const content = Ember.$('#new-message-input').val();
      const email = Ember.$('#user-email').val();
      const timestamp = moment().toISOString();
      const newMessage = this.get('store').createRecord('message', { content, timestamp });
      newMessage.save();
      Ember.$('#new-message-input').val('');
    }
  }
});
