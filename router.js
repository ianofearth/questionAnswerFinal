QuestionAnswer.Router.map(function(){
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'});
  this.resource('new-question');
});
