QuestionAnswer.Answer = DS.Model.extend({
  answerer: DS.attr(),
  answer: DS.attr(),

  question: DS.belongsTo('question', {async: true})
});
