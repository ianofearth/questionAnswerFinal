QuestionAnswer.Router.map(function(){
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
  // this.resource('answer', {path: '/answer/:answer_id'});
});
