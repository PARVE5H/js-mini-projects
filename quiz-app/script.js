document.addEventListener("DOMContentLoaded",()=>{
    
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [ "Charles Dickens", "Jane Austen","William Shakespeare","Mark Twain"],
            answer: "William Shakespeare",
        },
        {
            question: "What is the chemical symbol for gold?",
            choices:["Ag","Au","Fe","Hg"],
            answer: "Au",
        },
        {
            question: "How many continents are there in the world?",
            choices:["5","6","7","8"],
            answer: "7",
        },
        {
            question: "Who wrote the novel “War and Peace”?",
            choices:["Anton Chekhov","Fyodor Dostoevsky","Leo Tolstoy","Ivan Turgenev"],
            answer: "Leo Tolstoy",
        },
        {
            question: "What is the capital of Japan?",
            choices: ["Beijing","Tokyo","Seoul","Bangkok"],
            answer: "Tokyo",
        },
        {
            question: "What gas is used to extinguish fires?",
            choices: ["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
            answer: "Carbon dioxide",
        },
        {
            question: "What is the name of the process by which plants convert sunlight into energy?",
            choices: ["Evolution","Oxidation","Photosynthesis","Respiration"],
            answer: "Photosynthesis",
        },
        {
            question: "For which of these disciplines Nobel Prize is awarded?",
            choices:["Physics","Physiology","Medicine","All of the above"],
            answer: "All of the above",
        },
        {
            question: "Hitler's party is known as:",
            choices: ["Democratic Party","Ku-Klux-Klan","Labour Party","Nazi Party"],
            answer: "Nazi Party",
        },
    ];
    
    const questionContainer=document.getElementById("question-container");
    const resultContainer=document.getElementById("result-container");
    const questionText=document.getElementById("question-text");
    const choicesList=document.getElementById("choices-list")
    const scoreDisplay=document.getElementById("score");
    const nextBtn=document.getElementById("next-btn");
    const restartBtn=document.getElementById("restart-btn");
    const startBtn=document.getElementById("start-btn");

    let currentQuesIndex=0;
    let score=0;

startBtn.addEventListener("click",()=>startQuiz());

nextBtn.addEventListener("click",()=>loadNextQuestion());

restartBtn.addEventListener("click",()=>restartQuiz());

    function startQuiz(){
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    score=0;
    currentQuesIndex=0;
    loadQuestion();
    }
   
    function loadQuestion(){
    
    nextBtn.classList.add("hidden");
    choicesList.innerHTML="";
    questionText.textContent=questions[currentQuesIndex].question;

    questions[currentQuesIndex].choices.forEach((choice)=>{
        const li=document.createElement('li');

        li.textContent=choice;
        li.addEventListener("click",()=> handleAnswer(li,choice));

        choicesList.appendChild(li);
            
    });

    }

    function handleAnswer(selectedLi,choice){
        const correctAnswer = questions[currentQuesIndex].answer;

        Array.from(choicesList.children).forEach(li => li.style.pointerEvents = "none");

        if(choice===correctAnswer){
            selectedLi.classList.add("correct");
            score++;
        }else{
                selectedLi.classList.add("wrong")
            }

    Array.from(choicesList.children).forEach(li => {
        if (li.textContent === correctAnswer) {
            li.classList.add("correct");
            }
        });

    if (currentQuesIndex < questions.length - 1) {
            // nextBtn.classList.remove("hidden");
            setTimeout(()=>loadNextQuestion(),1000);
    } else {
            setTimeout(showResult, 2000);
        }
    }

    function loadNextQuestion() {
        currentQuesIndex++;
        loadQuestion();
    }

    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

    function restartQuiz() {
        startQuiz();
    }
    
});