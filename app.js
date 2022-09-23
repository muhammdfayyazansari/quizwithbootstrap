// // ******************************  Log in And sign up javascript code *****************************************************
var userLocate = window.location.href;
var lstd = userLocate.lastIndexOf('/')+1;
var file = userLocate.slice(lstd);
var flag;
function signup(){
    var getEmail = document.getElementById('suEmail');
var getPass = document.getElementById('suPassword');
var getName = document.getElementById('uName');
localStorage.setItem('email',getEmail.value);
localStorage.setItem('password',getPass.value);
localStorage.setItem('name',getName.value); 
if(getEmail.value && getPass.value && getName.value){
    window.location.href = './login.html';
    // alert('redirect to logIn page')
}else{
    alert("All fields are required")
}
}
function login(){
var getEmail = document.getElementById('LiEmail').value;
var getPass = document.getElementById('LiPassword').value;
var lclEmail=localStorage.getItem('email')
var lclPass = localStorage.getItem('password')
if(getEmail===lclEmail && getPass === lclPass){
    flag=false;
localStorage.setItem('flag',flag);
    window.location.href = './index.html';
    // alert('User Successfully login');
}else{
    // alert(getEmail + ' ' + lclEmail)
    alert("User not found")
}
}
function change(){
    window.location.href = './signup.html'

}
if((file === 'index.html' || file === 'quizwithbootstrap.netlify.app' )&& localStorage.getItem('flag')!== "false"){
change();
}









var min= 05;
var sec = 00;
var intervale;
var getMin = document.getElementById('minutes');
var getSec = document.getElementById('seconds');
getMin.innerHTML = '0'+ min
function timer(){
  if(sec == 00 && getMin.innerText != "00"){
    min--;
    getMin.innerText = min;
    if(getMin.innerText.length<2 ){
      getMin.innerText = '0' + min;
    }
    sec = 60;
  }
  sec--;
  getSec.innerText = sec;
  if(getSec.innerText.length<2){
    getSec.innerText = '0' + sec;
  }
  
}
function start(){
  var intervale=setInterval(timer,
  1000);
  var getStart = document.getElementById('startbtn')
  var getNext = document.getElementById('nextbtn')
  var getSubmit = document.getElementById('submitbtn')
  getStart.setAttribute('class','btn btn-outline-info d-none')
  getNext.setAttribute('class','btn btn-outline-info')
  getSubmit.setAttribute('class','btn btn-outline-success')

}

var count = 0;
var score = 0;
var questions = {
  0: {    
    question: "Q1. Inside which HTML element do we put the JavaScript?",
    0: "&lt;javascript&gt;",
    1: "&lt;script&gt;",
    2: "&lt;js&gt;",
    3: "&lt;scripting&gt;",
    answer: "&lt;script&gt;"

  },
  1: {
    question: "Q2. What is the correct JavaScript syntax to change the content of the HTML element below? <br><p style='color:#fff'; class='text-break';><br>&lt;p id='demo'&gt;This is a demonstration.&lt;/p&gt;</p>",
    0: 'document.getElementById("demo").innerHTML = "Hello World!"',
    1: 'document.getElementByName("p").innerHTML = "Hello World!',
    2: '#demo.innerHTML = "Hello World!',
    3: 'document.getElement("p").innerHTML = "Hello World!',
    answer: 'document.getElementById("demo").innerHTML = "Hello World!"'

  },
  2: {
    question: "Q3. Where is the correct place to insert a JavaScript?",
    0: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct',
    1: 'The &lt;body&gt; section',
    2: 'The &lt;head&gt; section',
    3: 'None of the above',
    answer: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct'
  }
  ,
  3: {
    question: 'Q4. How can you add a comment in a JavaScript? ',
    0: '//This is a comment',
    1: '&lt;!--This is a comment--&gt;',
    2: "'This is a comment",
    3: 'None of the above',
    answer: '//This is a comment'
  }
  ,
  4: {
    question: "Q5. How do you write 'Hello World' in an alert box? ",
    0: 'alert("Hello World");  ',
    1: 'alertBox("Hello World");',
    2: 'msg("Hello World");',
    3: 'msgBox("Hello World");',
    answer: 'alert("Hello World");  '
  }
  ,
  5: {
    question: "Q6. How do you create a function in JavaScript? ",
    0: 'function = myFunction()',
    1: 'function myFunction()  ',
    2: 'function:myFunction()',
    3: 'create function()',
    answer: 'function myFunction()  '
  }
  ,
  6: {
    question: "Q7. How do you call a function named 'myFunction'? ",
    0: 'call myFunction()',
    1: 'myFunction()  ',
    2: 'call function myFunction()',
    3: 'print call myFunction()',
    answer: 'myFunction()  '
  }
  ,
  7: {
    question: "Q8. How to write an IF statement in JavaScript? ",
    0: 'if i = 5',
    1: 'if i == 5 then',
    2: 'if (i == 5)',
    3: 'if i = 5 then',
    answer: 'if (i == 5)'
  }
  ,
  8: {
    question: 'Q9. How to write an IF statement for executing some code if "i" is NOT equal to 5? ',
    0: 'if i =! 5 then',
    1: 'if i <> 5',
    2: 'if (i <> 5)',
    3: 'if (i != 5)  ',
    answer: 'if (i != 5)  '
  }
  ,
  9: {
    question: "Q10. How does a WHILE loop start? ",
    0: 'while (i &lt;= 10)',
    1: 'while (i &lt;= 10; i++)',
    2: 'while i = 1 to 10',
    3: 'while i++ (i &lt;= 10)',
    answer: 'while (i &lt;= 10)'
  }
  ,
  10: {
    question: "Q11. How does a FOR loop start? ",
    0: 'for (i &lt;= 5; i++)',
    1: 'for (i = 0; i &lt;= 5; i++)  ',
    2: 'for (i = 0; i &lt;= 5)',
    3: 'for i = 1 to 5',
    answer: 'for (i = 0; i &lt;= 5; i++)  '
  }
  ,
  11: {
    question: "Q12. How to insert a comment that has more than one line?",
    0: '/*This comment has <br> more than one line*/',
    1: '//This comment has<br>more than one line//',
    2: '&lt;!--This comment has <br>more than one line--&gt;',
    3: 'None of the above',
    answer: '/*This comment has <br> more than one line*/'
  }
  ,
  12: {
    question: "Q13. What is the correct way to write a JavaScript array? ",
    0: 'var colors = (1:"red", 2:"green", 3:"blue")',
    1: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    2: 'var colors = ["red", "green", "blue"]',
    3: 'var colors = "red", "green", "blue"',
    answer: 'var colors = ["red", "green", "blue"]'
  }
  ,
  13: {
    question: "Q14. How do you round the number 7.25, to the nearest integer? ",
    0: 'round(7.25)',
    1: 'Math.round(7.25)',
    2: 'rnd(7.25)',
    3: 'Math.rnd(7.25)',
    answer: 'Math.round(7.25)'
  }
  ,
  14: {
    question: "Q15. How do you find the number with the highest value of x and y? ",
    0: 'Math.ceil(x, y)',
    1: 'ceil(x, y)',
    2: 'floor(x, y)',
    3: 'Math.max(x, y)',
    answer: 'Math.max(x, y)'
  }
  ,
  15: {
    question: 'Q16. What is the correct JavaScript syntax for opening a new window called "w2" ? ',
    0: 'w2 = window.new("http://www.google.com"); ',
    1: 'w2 = window.blank("http://www.google.com");  ',
    2: 'w2 = window.open("http://www.google.com");  ',
    3: 'None of the above',
    answer: 'w2 = window.open("http://www.google.com");  '
  }
  ,
  16: {
    question: "Q.17 How can you detect the client's browser name?",
    0: 'client.navName',
    1: 'url.browser.name',
    2: 'navigator.appName  ',
    3: 'browser.name',
    answer: 'navigator.appName  '
  }
  ,
  17: {
    question: "Q18. Which event occurs when the user clicks on an HTML element?",
    0: 'onmouseclick',
    1: 'onchange',
    2: 'onmouseover',
    3: 'onclick ',
    answer: 'onclick '
  }
  ,
  18: {
    question: "Q19. How do you declare a JavaScript variable ",
    0: 'var 3name',
    1: 'v carName;',
    2: 'variable carName;',
    3: 'var carName;',
    answer: 'var carName;'
  }
  ,
  19: {
    question: "Q20. Which operator is used to assign a value to a variable? ",
    0: 'x',
    1: '=',
    2: '===',
    3: '!=',
    answer: '= '
  }

}

var options = document.getElementsByClassName("form-check-label py-2 py-sm-3 text-break");
var inputs = document.getElementsByClassName('form-check-input mx-2');
var showQues = document.getElementById('showQues');
showQues.innerHTML = questions[count].question;

function next(){
  showQues.innerHTML = questions[count].question;
  for(var i=0; i<options.length; i++){
    if(inputs[i].checked && inputs[i].nextElementSibling.innerHTML === questions[count-1].answer){
      score++;
      console.log('mil gaya ', inputs[i].nextElementSibling.innerHTML)
    }
    inputs[i].checked = false;
    options[i].innerHTML = questions[count][i];
  }
  count++;
var lenghtOfQuestions = Object.keys(questions).length;

if(count == lenghtOfQuestions){
  var nextBtn  = document.getElementById('buttonHide');
  var submitBtn  = document.getElementById('buttonShow');
  nextBtn.setAttribute('class','btn btn-outline-primary d-none');
  submitBtn.setAttribute('class','btn btn-outline-success');
  
}

console.log(score)
}
function result(){
  var quizDiv = document.getElementById('quizRunning');
  var resultDiv =  document.getElementById('resultDiv');
  var getScore = document.getElementById('score');
  var getAccuracy = document.getElementById('accuracy')
  var getMinutes = document.getElementById('min');
  var getSeconds = document.getElementById('sec');
  var getGrade = document.getElementById('grade');
  var grade;
  var perc = (score/20)*100;
  quizDiv.setAttribute('class','col-11 col-lg-8 bg-img-color pb-3 d-none');
  resultDiv.setAttribute('class','col-11 col-lg-8 bg-img-color px-4 py-5')
  getMinutes.innerText = min;
  getSeconds.innerText = sec;
  getScore.innerText = score;
  getAccuracy.innerText = perc + "%";
  if(perc >= 80 && perc<=100){
    grade= "A-One";
  }else if(perc >= 70 && perc<80){
    grade = 'A';
  }else if(perc >= 60 && perc<70){
    grade = 'B';
  }else if(perc >= 50 && perc<60){
    grade = 'C';
  }else{
    grade = 'Fail'
  }
  getGrade.innerHTML = grade;

}

function endQuiz(){
  clearInterval(intervale);
  result();
  }
  setTimeout(endQuiz, 300000);
  // setTimeout(endQuiz, 108000000);
  
