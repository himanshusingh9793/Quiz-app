
const questions = [
  {
    "id": 1,
    "question": "Q-1: What is the primary purpose of JavaScript?",
    "options": {
      "a": "Styling web pages",
      "b": "Enhancing the functionality of web pages",
      "c": "Database management",
      "d": "Server-side scripting"
    },
    "correctAnswer": "ans2"
  },
  {
    "id": 2,
    "question": "Q-2: Which keyword is used to declare a variable in JavaScript?",
    "options": {
      "a": "var",
      "b": "let",
      "c": "const",
      "d": "all of the above"
    },
    "correctAnswer": "ans3"
  },
  {
    "id": 3,
    "question": "Q-3: What does the '=== ' operator do in JavaScript?",
    "options": {
      "a": "Checks equality with type coercion",
      "b": "Checks equality without type coercion",
      "c": "Assigns a value",
      "d": "Concatenates strings"
    },
    "correctAnswer": "ans2"
  },
  {
    "id": 4,
    "question": "Q-4: What is the purpose of the 'addEventListener' method in JavaScript?",
    "options": {
      "a": "To create a new element",
      "b": "To handle events like clicks or keypresses",
      "c": "To manipulate the DOM",
      "d": "To define a function"
    },
    "correctAnswer": "ans2"
  },
  {
    "id": 5,
    "question": "Q-5: What is a closure in JavaScript?",
    "options": {
      "a": "A block of code",
      "b": "A built-in function",
      "c": "A combination of a function and the lexical environment within which that function was declared",
      "d": "A loop construct"
    },
    "correctAnswer": "ans3"
  }
]

const ques = document.querySelector('.question')
const op1 = document.querySelector('#option1')
const op2 = document.querySelector('#option2')
const op3 = document.querySelector('#option3')
const op4 = document.querySelector('#option4')

const submit = document.querySelector('.btn')
const answer=document.querySelectorAll('.ans')

const showscore=document.querySelector('#showscore');
let quesCount = 0;
let score=0;
function loadquestion() {
  const quesList = questions[quesCount];
  ques.innerText = quesList.question;

  op2.innerText = quesList.options.b;
  op3.innerText = quesList.options.c;
  op1.innerText = quesList.options.a;
  op4.innerText = quesList.options.d;

};
loadquestion();

function getCheckAns(){
  let ansi;
  answer.forEach((currAnsEle) => {
    if(currAnsEle.checked){
      ansi=currAnsEle.id;
    }
    
  });
  return ansi;

}

function deSelectAll(){
  answer.forEach((currAnsEle) =>
    currAnsEle.checked=false);
    
}


submit.addEventListener('click', ()=> {
  const checkAns = getCheckAns();
  console.log(checkAns);

  if(checkAns === questions[quesCount].correctAnswer){
    score++;
  }
  quesCount++;
  deSelectAll();
  if(quesCount<questions.length){
    loadquestion();
  }
  else{
    showscore.innerHTML=`<h3>Your Scored! ${score}/${questions.length} ✌️ </h3>
    <button class="btn" onClick="location.reload()">play again-></button>
    `;
    showscore.classList.remove('scoreArea');
  }
});
