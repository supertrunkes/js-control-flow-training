console.log("security_questions.js loaded");
let securityQuestions = [
  {question: "What school do you go to?" , expectedAnswer: "GA" },
  {question: "What street is that on?" , expectedAnswer: "bush" },
  {question: "What WDI class are you in?" , expectedAnswer: "40" }
]
for (let i = 0; i < securityQuestions.length; i++){
  let questionAsk = prompt(securityQuestions[i].question);
   if (questionAsk != securityQuestions[i].expectedAnswer){
     alert ("Thats the wrong answer!");
     console.log("Thats the wrong answer!");
     break;
   }
}
