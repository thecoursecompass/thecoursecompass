/* Flatten the section registry into the array expected by chemistry-quiz.html. */
window.chemistryQuestions = Object.keys(window.chemistryQuestionSections||{}).flatMap(sectionName => window.chemistryQuestionSections[sectionName]);
