QuestionAnswer.Answer = DS.Model.extend({
  answer: DS.attr(),
  answerer: DS.attr(),

  question: DS.belongTo('question', {async: true})
});
