const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }

]

/* 
    Challenge: 30 mins
    Display all the subject, question and corresponding answers with the following format
    e.g.
    Subject:  Sport
    Question 1:  Which one is correct team name in NBA?
    Answer:  Huston Rocket
    -----------------------
    Subject:  Math
    Question 1:  5 + 7 = ?
    Answer:  12
    Question 2:  12 - 8 = ?
    Answer:  4
*/

// Write your answer here
Const quiz = [
    {
        “subject”: “Sport”,
        “quiz”: [
            {
                “question”: “Which one is correct team name in NBA?”,
                “options”: [
                    “New York Bulls”,
                    “Los Angeles Kings”,
                    “Golden State Warriors”,
                    “Huston Rocket”
                ],
                “answer”: “Huston Rocket”
            }
        ]
    },
    {
        “subject”: “Math”,
        “quiz”: [
            {
                “question”: “5 + 7 = ?”,
                “options”: [
                    “10”,
                    “11”,
                    “12”,
                    “13”
                ],
                “answer”: “12”
            },
            {
                “question”: “12 – 8 = ?”,
                “options”: [
                    “1”,
                    “2”,
                    “3”,
                    “4”
                ],
                “answer”: “4”
            }
        ]
    }
];

// Function to display quiz details
Function displayQuizDetails() {
    Quiz.forEach(subject => {
        Console.log(Subject: ${subject.subject});
        Subject.quiz.forEach((question, index) => {
            Console.log(Question ${index + 1}: ${question.question});
            Console.log(Answer: ${question.answer});
            Console.log(“-----------------------“);
        });
    });
}

// Call the function to display quiz details
displayQuizDetails();

