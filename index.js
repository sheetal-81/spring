// script.js

let questions = [
{
    prompt: `What is Spring Framework?`,
    options: [
        "A framework for building Java-based applications",
        "A programming language",
        "A database management system",
        "A web browser",
    ],
    answer: "A framework for building Java-based applications",
},
{
    prompt: `What are the key features of Spring Framework?`,
    options: [
        
        "Manual configuration, requires external servers, code generation, and development only",
        "Standalone, lightweight, no dependencies, and development only",
        "Standalone, heavyweight, requires external servers, and development only",
        "Dependency Injection, Aspect-Oriented Programming, MVC, and IoC Container",
    ],
    answer: "Dependency Injection, Aspect-Oriented Programming, MVC, and IoC Container",
},
{
    prompt: `What is Inversion of Control (IoC) in Spring?`,
    options: [
        "A design principle where control of object creation is inverted to a container or framework",
        "A programming language",
        "A database management system",
        "A web browser",
    ],
    answer: "A design principle where control of object creation is inverted to a container or framework",
},
{
    prompt: `What is Dependency Injection (DI) in Spring?`,
    options: [
        
        "A programming language",
        "A database management system",
        "A web browser",
        "A design pattern where dependencies of a class are injected from outside",
    ],
    answer: "A design pattern where dependencies of a class are injected from outside",
},
{
    prompt: `What is the purpose of ApplicationContext in Spring?`,
    options: [
        
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
        "To provide configuration information to the Spring IoC container",
    ],
    answer: "To provide configuration information to the Spring IoC container",
},
{
    prompt: `What is the purpose of BeanFactory in Spring?`,
    options: [
        "To manage Spring beans",
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To manage Spring beans",
},
{
    prompt: `What is the purpose of @Autowired annotation in Spring?`,
    options: [
       
        "To define the structure of a component",
        "To inject dependencies automatically",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To inject dependencies automatically",
},
{
    prompt: `What is the purpose of @Component annotation in Spring?`,
    options: [
        "To indicate that a class is a Spring component",
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To indicate that a class is a Spring component",
},
{
    prompt: `What is the purpose of @Service annotation in Spring?`,
    options: [
        
        "To define the structure of a component",
        "To handle HTTP requests",
        "To indicate that a class is a service component",
        "To configure database connections",
    ],
    answer: "To indicate that a class is a service component",
},
{
    prompt: `What is the purpose of @Repository annotation in Spring?`,
    options: [
        "To indicate that a class is a repository component",
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To indicate that a class is a repository component",
},
{
    prompt: `What is Spring MVC?`,
    options: [
        
        "A programming language",
        "A database management system",
        "A web browser",
        "A web framework for building MVC-based web applications",
    ],
    answer: "A web framework for building MVC-based web applications",
},
{
    prompt: `What is the purpose of @Controller annotation in Spring MVC?`,
    options: [
        "To indicate that a class is a controller",
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To indicate that a class is a controller",
},
{
    prompt: `What is the purpose of @RequestMapping annotation in Spring MVC?`,
    options: [
        
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
        "To map HTTP requests to controller methods",
    ],
    answer: "To map HTTP requests to controller methods",
},
{
    prompt: `What is the purpose of @PathVariable annotation in Spring MVC?`,
    options: [
        
        "To define the structure of a component",
        "To extract values from the URI path",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To extract values from the URI path",
},
{
    prompt: `What is Spring Data JPA?`,
    options: [
       
        "A programming language",
        "A database management system",
        "A data access framework",
        "A web browser",
    ],
    answer: "A data access framework",
},
{
    prompt: `What is the purpose of JpaRepository interface in Spring Data JPA?`,
    options: [
        
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
        "To provide CRUD operations for entities",
    ],
    answer: "To provide CRUD operations for entities",
},
{
    prompt: `What is Spring Security?`,
    options: [
        "A framework for authentication and authorization",
        "A programming language",
        "A database management system",
        "A web browser",
    ],
    answer: "A framework for authentication and authorization",
},
{
    prompt: `What is the purpose of @EnableAutoConfiguration annotation in Spring Boot?`,
    options: [
        
        "To define the structure of a component",
        "To enable auto-configuration of the Spring application context",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To enable auto-configuration of the Spring application context",
},
{
    prompt: `What is the purpose of @ComponentScan annotation in Spring Boot?`,
    options: [
       
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
        "To scan for Spring-managed components",
    ],
    answer: "To scan for Spring-managed components",
},
{
    prompt: `What is the purpose of @Value annotation in Spring?`,
    options: [
        "To inject values from properties files",
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
    ],
    answer: "To inject values from properties files",
},
{
    prompt: `What is the purpose of @Transactional annotation in Spring?`,
    options: [
       
        "To define the structure of a component",
        "To handle HTTP requests",
        "To configure database connections",
        "To define transactional behavior",
    ],
    answer: "To define transactional behavior",
},
{
    prompt: `What is the purpose of @Aspect annotation in Spring?`,
    options: [
        
        "To define the structure of a component",
        "To handle HTTP requests",
        "To define aspect-oriented aspects",
        "To configure database connections",
    ],
    answer: "To define aspect-oriented aspects",
}

	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
