QuestionAnswer.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var question = this.get('model');
      question.save();
    }
  }
});
