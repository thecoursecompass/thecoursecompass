/* Flatten Biology section registry into the array consumed by biology-quiz.html. */
window.biologyQuestionSections = window.biologyQuestionSections || {};
window.biologyQuestions = Object.keys(window.biologyQuestionSections).flatMap(function (sectionName) {
  return window.biologyQuestionSections[sectionName];
});
