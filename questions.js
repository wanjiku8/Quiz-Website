let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "a) HyperText Markup Language",
        options: [

            "a) HyperText Markup Language ",
            "b) Hyper Transfer Markup Language ",
            "c) High Tech Markup Language ",
            "d) Hyperlink and Text Markup Language "
        ]
    },
    {
        numb: 2,
        question: "How do you create a hyperlink in HTML?",
        answer: " c) Using the `<a>` tag ",
        options: [
            " a) Using the `<link>` tag ",
            " b) Using the `<hyper>` tag ",
            " c) Using the `<a>` tag d) Using the `<url>` tag "

        ]
    },
    {
        numb: 3,
        question: "What is the purpose of the `<p>` tag in HTML?",
        answer: " b) Defines a paragraph ",
        options: [
           " a) Defines a picture",
           " b) Defines a paragraph ",
           " c) Defines a link ",
           " d) Defines a table "
        ]
    }, 
       {
        numb: 4,
        question: "Question: What does CSS stand for? ",

        answer: "a) Cascading Style Sheets ",   
        options: [
        "a) Cascading Style Sheets ",
        "b) Creative Style Selector ",
        "c) Computer Style Syntax ",
        "d) Colorful Style Sheets "
        ]
    },
    {
        numb: 5,
        question: "Which HTML tag is used for creating an ordered list with numbers? ",
        answer: " b) `<ol>`",
        options: [
        "a) `<ul>`",
        "b) `<ol>`",
        "c) `<li>`",
        "d) `<dl>` "
        ]
    },
    {
        numb: 6,
        question: "How do you create a comment in HTML? ",
        answer: " a) `<!-- This is a comment -->`",
        options: [
        "a) `<!-- This is a comment -->`",
        "b) `/* This is a comment */`",
        "c) `// This is a comment` ",
        "d) `<!--- This is a comment --->` "
        ]
    },
    {
        numb: 7,
        question: "Which HTML tag is used to create a hyperlink to another website? ",
        answer: " d) `<a>`",
        options: [
        "a) `<link>`",
        "b) `<href>`",
        "c) `<url>` ",
        "d) `<a>` "
        ]
    },
    {
        numb: 8,
        question: "In CSS, which property is used to change the style of an underline for a text element? ",
        answer: " b) `text-decoration` ",
        options: [
        "a) `underline-style`",
        "b) `text-decoration` ",
        "c) `text-style` ",
        "d) `line-decoration` "
        ]
    },
    {
        numb: 9,
        question: "What does the CSS property 'margin' control? ",
        answer: " b) The space between elements on the web page ",
        options: [
        "a) The space between the border and the content ",
        "b) The space between elements on the web page ",
        "c) The space inside an element",
        "d) The font size of text "

        ]
    },
    {
        numb: 10,
        question:"What is the purpose of the CSS `float` property? ",
        answer: "c) To control the positioning of an element in relation to its containing element ",
        options: [
         " a) To change the color of an element ",
         " b) To make text bold ",
         " c) To control the positioning of an element in relation to its containing element ",
         " d) To create a horizontal line "
        ]
    }
]










let array = ["1.Question: What does HTML stand for?" ,
"a) HyperText Markup Language ",
"b) Hyper Transfer Markup Language ",
"c) High Tech Markup Language ",
"d) Hyperlink and Text Markup Language ",
"Answer: a) HyperText Markup Language", 

"2. Question: How do you create a hyperlink in HTML?",
" a) Using the `<link>` tag ",
" b) Using the `<hyper>` tag ",
 "c) Using the `<a>` tag d) Using the `<url>` tag ",
" Answer: c) Using the `<a>` tag ",
 
"3. Question: What is the purpose of the `<p>` tag in HTML?",
" a) Defines a picture",
" b) Defines a paragraph ",
 "c) Defines a link ",
" d) Defines a table ",
" Answer: b) Defines a paragraph ",
 
"4. Question: What does CSS stand for? ",
"a) Cascading Style Sheets ",
"b) Creative Style Selector ",
"c) Computer Style Syntax ",
"d) Colorful Style Sheets ",
"Answer: a) Cascading Style Sheets ",

"3. Question: Which HTML tag is used for creating an ordered list with numbers? ",
"a) `<ul>`",
"b) `<ol>`",
"c) `<li>`",
"d) `<dl>` ",
"Answer: b) `<ol>`", 

"4. Question: What is the purpose of the `<h1>` tag in HTML? ",
"a) Defines a hyperlink ",
"b) Defines a header",
"c) Defines a horizontal line ",
"d) Defines a highlight",
" Answer: b) Defines a header ",
 
"5. Question: In CSS, which property is used to change the style of list bullets? ",
"a) `list-style-type`",
"b) `bullet-style`",
"c) `list-item-style` ",
"d) `list-bullet-type` ",
"Answer: a) `list-style-type` ",

"6. Question: How do you create a comment in HTML? ",
"a) `<!-- This is a comment -->`",
"b) `/* This is a comment */`",
"c) `// This is a comment` ",
"d) `<!--- This is a comment --->` ",
"Answer: a) `<!-- This is a comment -->`",

"7. Question: Which HTML tag is used to create a hyperlink to another website? ",
"a) `<link>`",
"b) `<href>`",
"c) `<url>` ",
"d) `<a>` ",
"Answer: d) `<a>` ",

"8. Question: In CSS, which property is used to change the style of an underline for a text element? ",
"a) `underline-style`",
"b) `text-decoration` ",
"c) `text-style` ",
"d) `line-decoration` ",
"Answer: b) `text-decoration` ",

"9. Question: What does CSS stand for? ",
"a) Color Style Sheet ",
"b) Creative Styling System ",
"c) Cascading Style Sheets ",
"d) Computer Styling Software ",
"Answer: c) Cascading Style Sheets ",

"10. Question: Which HTML tag is used to insert a line break within a paragraph? ",
"a) `<br>` ",
"b) `<lb>` ",
"c) `<newline>`",
"d) `<break>`", 
"Answer: a) `<br>` ",

"11. Question: What does the CSS property 'margin' control? ",
"a) The space between the border and the content ",
"b) The space between elements on the web page ",
"c) The space inside an element",
"d) The font size of text ",
"Answer: b) The space between elements on the web page ",

"12. Question: What does the html <div>element represent?",
"a) A division in mathematical equation",
"b) A container for grouping and styling content",
"c) A hyperlink to another web page",
"d) A definition list ",
"Answer: b)A container for grouping and styling content",

"13. Question: Which HTML tag is used to define the structure of an HTML document, such as headings, paragraphs, and lists?",
" a) `<style>`", 
" b) `<body>` ",
 "c) `<header>` ",
" d) `<main>` ",
" Answer: b) `<body>` ",
 
" 14. Question: In CSS, which property is used to set the text alignment within an element? ",
" a) `text-align` ",
" b) `text-justify`",
" c) `text-indent` ",
 "d) `text-spacing`", 
" Answer: a) `text-align` ",
 
 "15. Question: What is the purpose of the `<span>` tag in HTML? ",
" a) To create a hyperlink ",
" b) To group inline elements for styling", 
" c) To define a section of a web page ",
" d) To insert a line break ",
" Answer: b) To group inline elements for styling ",
 
" 16. Question: What is the purpose of the CSS `float` property? ",
" a) To change the color of an element ",
" b) To make text bold ",
 "c) To control the positioning of an element in relation to its containing element ",
" d) To create a horizontal line ",
 "Answer: c) To control the positioning of an element in relation to its containing element ",

 "17. Question: How do you comment out a single line of code in CSS?",
" a) <!--This is a comment -->",
" b) /*  This is a comment  */",
" c) //  This is a comment  " ,
" d) --- This is a comment ---",
" Answer: b) /*  This is a comment  */",

" 18. Question: What does the CSS property 'background' control?",
" a) The font size of the text",
" b) The spacing between elements ",
" c) The background color of an element",
" d) The image to be displayed as the background of an element",
 "Answer: d) The image to be displayed as the background of an element"
];