QuestionAnswer.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        answerer: this.get('answerer'),
        answer: this.get('answer')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.transitionToRoute('question', question.id);
    }
  }
});
