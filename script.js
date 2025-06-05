function opensidemenu() {
    const sidemenu = document.querySelector(".sidebar");
    sidemenu.style.display = 'flex';
}

function closesidemenu() {
    const sidemenu = document.querySelector(".sidebar");
    sidemenu.style.display = 'none';
}

let quizdata = [
    {
        "question": "What is the output of print(2 ** 3)?",
        "opt1": "6",
        "opt2": "8",
        "opt3": "9",
        "opt4": "5",
        "correct_answer": "opt2"
    },
    {
        "question": "Which of the following is a valid variable name in Python?",
        "opt1": "2name",
        "opt2": "@name",
        "opt3": "first_name",
        "opt4": "class",
        "correct_answer": "opt3"
    },
    {
        "question": "What is the data type of True in Python?",
        "opt1": "String",
        "opt2": "Integer",
        "opt3": "Float",
        "opt4": "Boolean",
        "correct_answer": "opt4"
    },
    {
        "question": "Which keyword is used to create a function in Python?",
        "opt1": "define",
        "opt2": "function",
        "opt3": "def",
        "opt4": "func",
        "correct_answer": "opt3"
    },
    {
        "question": "What will len(\"Python\") return?",
        "opt1": "5",
        "opt2": "6",
        "opt3": "7",
        "opt4": "Error",
        "correct_answer": "opt2"
    },
    {
        "question": "Which operator is used for floor division in Python?",
        "opt1": "/",
        "opt2": "//",
        "opt3": "%",
        "opt4": "**",
        "correct_answer": "opt2"
    },
    {
        "question": "What does the range(3) function return?",
        "opt1": "[1, 2, 3]",
        "opt2": "[0, 1, 2]",
        "opt3": "[0, 1, 2, 3]",
        "opt4": "[1, 2]",
        "correct_answer": "opt2"
    },
    {
        "question": "How do you insert comments in Python code?",
        "opt1": "// comment",
        "opt2": "<!-- comment -->",
        "opt3": "# comment",
        "opt4": "/* comment */",
        "correct_answer": "opt3"
    },
    {
        "question": "Which of the following is a mutable data type?",
        "opt1": "Tuple",
        "opt2": "String",
        "opt3": "List",
        "opt4": "Integer",
        "correct_answer": "opt3"
    },
    {
        "question": "What will be the result of 5 == \"5\"?",
        "opt1": "True",
        "opt2": "False",
        "opt3": "Error",
        "opt4": "None",
        "correct_answer": "opt2"
    }
];

let counter = 0;
let score = document.querySelector(".score");
let data;

function loadquestion() {
    data = quizdata[counter];
    document.querySelector(".ques").innerText = data.question;
    document.querySelector(".answer1").innerText = data.opt1;
    document.querySelector(".answer2").innerText = data.opt2;
    document.querySelector(".answer3").innerText = data.opt3;
    document.querySelector(".answer4").innerText = data.opt4;
}

loadquestion();

let options = document.querySelectorAll("input[name='opt']");
let scoreboard = 0;
let submit = document.querySelector(".submit");

const deselectAll = () => {
    options.forEach((option) => {
        option.checked = false;
    });
};

submit.addEventListener("click", () => {
    let selected = false;
    let userchoice;

    options.forEach((option) => {
        if (option.checked) {
            userchoice = option.id;
            selected = true;
        }
    });

    if (!selected) {
        alert("Please select an option before submitting!");
        return;
    }

    if (userchoice === data.correct_answer) {
        scoreboard++;
    }

    deselectAll();
    counter++;

    if (counter < quizdata.length) {
        loadquestion();
    } else {
        score.innerHTML = `
            <h2>You scored ${scoreboard}/${quizdata.length} ✌️</h2>
            <button onClick="window.location.reload();">Play Again</button>
        `;
        submit.style.visibility = "hidden";
        score.classList.remove("score");
        score.classList.add("showScore");
    }
});
