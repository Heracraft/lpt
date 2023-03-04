export let questions = [
  {
    section: "Choose the Correct Word",
    ai: false,
    instructions:
      "Read each sentence carefully and select the best word to complete it",
    questions: [
      {
        question:
          "Someone who studies the stars and planets. _______________________",
        answer: "Astronomer",
      },
      {
        question: "Rules, regulations, laws. ______________________________",
        answer: "Laws",
       
      },
      {
        question:
          "A person who believes in no religion. ____________________________",
        answer: "Atheist",
       
      },
      {
        question:
          "A person who sells goods or services. ___________________________",
        answer: "Merchant",
       
      },
    ],
  },
  {
    ai: false,
    section: "Verbs and adverbs",
    instructions:
      "Change the verbs and adverbs into their opposites. Give the answer as an object containing the answer and its verb or adverb form",
    questions: [
      {
        question: "Run",
        verbAdverbForm: "verb",
        answer: "Walk",
       
      },
      {
        question: "Quickly",
        verbAdverbForm: "adverb",
        answer: "Slowly",
       
      },
      {
        question: "Ascend",
        verbAdverbForm: "verb",
        answer: "Descend",
       
      },
      {
        question: "Always",
        verbAdverbForm: "adverb",
        answer: "Never",
        index: 3,
        instructions:
          "Change the verbs and adverbs into their opposites. Give the answer as an object containing the answer and its verb or adverb form",
      },
      {
        question: "Grow",
        verbAdverbForm: "verb",
        answer: "Shrink",
       
      },
    ],
  },
  {
    section: "Modals",
    selected: true,
    ai: false,
    instructions: "Choose the correct answer for each question",
    questions: [
      {
        question: "If I _________________ to go, I would have gone.",
        options: ["wanted", "had wanted", "would want", "have wanted"],
        answer: "wanted",
       
      },
      {
        question:
          "If they ___________________ earlier, they wouldn't have missed the train.",
        options: ["came", "had come", "would come", "are coming"],
        answer: "had come",
       
      },
      {
        question: "If I ___________________ able, I would help you.",
        options: ["am", "were", "had been", "will be"],
        answer: "were",
       
      },
      {
        question: "If we __________________ more money, we could buy it.",
        options: ["had", "have", "will have", "were having"],
        answer: "had",
       
      },
      {
        question: "If he ____________________ hard, he would have succeeded.",
        options: ["worked", "has worked", "had worked", "was working"],
        answer: "had worked",
       
        selected: true,
        index: 4,
        instructions: "Choose the correct answer for each question",
      },
    ],
  },
  {
    section: "Punctuation",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "Where does the period go in 'Let's have dinner tonight'?",
        options: [
          "At the beginning of the sentence",
          "After 'let's'",
          "After 'have'",
          "At the end of the sentence",
        ],
        answer: "At the end of the sentence",
       
      },
      {
        question:
          "Which word should be punctuated in the title 'The Cat's Tail'?",
        options: ["The", "Cat's", "Tail"],
        answer: "Cat's",
       
      },
      {
        question:
          "Which word should be punctuated in this sentence: 'We went to the mall yesterday'?",
        options: ["We", "Went", "Mall", "Yesterday"],
        answer: "Mall",
       
      },
      {
        question:
          "Which word should be punctuated in the sentence: 'I want to eat lunch now'?",
        options: ["I", "Want", "Eat", "Now"],
        answer: "Now",
       
      },
    ],
  },
  {
    ai: false,
    section: "Passage",
    instructions:
      "Read the following passage and answer the questions that follow",
    passage:
      "I had been walking around the city with my friend Jill. We passed by a small cafe and saw two people playing chess on the sidewalk. They seemed to be having fun and enjoying the game. We stopped to watch them for a few minutes and then they invited us to join in. We thanked them and accepted the offer. They had brought along some snacks and drinks, so we shared them while talking about different topics. Then we decided to play a game of tag with a beach ball. It was really entertaining and a lot of fun. The sun was setting and the lights were twinkling in the sky. After a while, it was time to go home. We said our goodbyes and promised to meet again sometime soon.",
    questions: [
      {
        question:
          "Who is telling the story? _____________________________________",
        answer: "I",
       
        index: 0,
        instructions:
          "Read the following passage and answer the questions that follow",
      },
      {
        question:
          "What were the two people doing? _____________________________________",
        answer: "Playing chess",
       
      },
      {
        question:
          "Where did they play? ____________________________________________",
        answer: "On the sidewalk",
       
      },
      {
        question: "What did they play? ________________________________",
        answer: "Tag with a beach ball",
       
      },
      {
        question: "What was twinkling in the sky? ______________________",
        answer: "Lights",
       
      },
    ],
  },
];
