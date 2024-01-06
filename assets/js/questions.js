// Define the questions and the choices and the answers, put it in a variable in questions.js file

const quizQuestions = [
    {
      "question-title": "Inside which HTML element do we put the JavaScript?",
      "choices": 
      ["<js>", "<javascript>", "<scripting>", "<script>"],
      "answer": "<script>"
    },

    {
      "question-title": "Where is the correct place to insert a JavaScript?",
      "choices": [
        "The <body> section", 
        "Both the <head> section and the <body> section are correct", 
        "The <head> section",
        "Don't need to insert"
        ],
      "answer": "Both the <head> section and the <body> section are correct"
    },

    {
      "question-title": "What is the correct syntax for referring to an external script called 'xxx.js'?",
      "choices": ['<script href="xxx.js">', '<script href="xxx.jc">','<script name="xxx.js">', '<script src="xxx.js">'],
      "answer": '<script src="xxx.js">'
    },

    {
      "question-title": "How do you write 'Hello World' in an alert box?",
      "choices": [ 
        "alertBox('Hello World')",
        "alert('Hello World')",
        "msg('Hello World')",
        "msgBox('Hello World')"
      ],
      "answer": "alert('Hello World')"
    },

    {
      "question-title": "How do you create a function in JavaScript?",
      "choices": [
        "function myFunction()",
        "function = myFunction()",
        "function:myFunction()",
        "function - myFunction"
      ],
      "answer": "function myFunction()"
    },
    
    {
      "question-title": "How do you call a function named 'myFunction'?",
      "choices": [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "myFunction() call"
      ],
      "answer": "myFunction()"
    },
    
    {
      "question-title": "How to write an IF statement in JavaScript?",
      "choices": [
        "if i = 5",
        "if i == 5",
        "if (i === 5)",
        "if i = 5 then" 
      ],
      "answer": "if (i === 5)"
    },

    {
      "question-title": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      "choices": [
        "if i <> 5",
        "if (i <> 5)",
        "if i =! 5 then",
        "if (i != 5)"
      ],
      "answer": "if (i != 5)"
    }
  ];
  
