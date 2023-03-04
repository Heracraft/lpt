export let questions=[
  {
    section: "Choose the correct word",
    ai: false,
    instructions:
      "Read each sentence carefully and select the best word to complete it",
    questions: [
      {
        question: "A person who makes clothes or sews. ____________________",
        answer: "Tailor",
      },
      {
        question: "Books, magazines, newspapers. ___________________________",
        answer: "Publications",
      },
      {
        question:
          "Salt, pepper, sugar, garlic. ______________________________________",
        answer: "Spices",
      },
      {
        question:
          "Games, puzzles, crosswords, quizzes. ____________________________",
        answer: "Entertainment",
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
        question: "Slowly",
        verbAdverbForm: "adverb",
        answer: "Quickly",
      },
      {
        question: "Easily",
        verbAdverbForm: "adverb",
        answer: "Difficultly",
      },
      {
        question: "Yell",
        verbAdverbForm: "verb",
        answer: "Whisper",
      },
      {
        question: "Frequently",
        verbAdverbForm: "adverb",
        answer: "Rarely",
      },
    ],
  },
  {
    section: "Modal Verbs",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "You ___________________go to school today.",
        options: ["must", "should", "could", "would"],
        answer: "must",
      },
      {
        question: "She _______________have finished the work yesterday.",
        options: ["should", "could", "must", "would"],
        answer: "should",
      },
      {
        question: "He __________________study harder.",
        options: ["must", "should", "could", "would"],
        answer: "must",
      },
      {
        question: "They _________________come late.",
        options: ["mustn't", "shouldn't", "couldn't", "wouldn't"],
        answer: "mustn't",
      },
      {
        question: "I ___________________see him this evening.",
        options: ["may", "might", "can", "could"],
        answer: "may",
      },
      {
        question: "We ___________________be here tomorrow.",
        options: ["may", "might", "can", "could"],
        answer: "might",
      },
      {
        question: "You _________________give a good presentation.",
        options: ["may", "might", "can", "could"],
        answer: "can",
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
        question:
          "Where is the comma placed in this sentence: 'It was raining heavily and lightning flashed across the sky'",
        options: [
          "Between 'raining' and 'heavily'",
          "At the end of the sentence",
          "Between 'heavily' and 'and'",
          "At the beginning of the sentence",
        ],
        answer: "Between 'raining' and 'heavily'",
      },
      {
        question:
          "Which punctuation mark is used at the end of a sentence that is a statement?",
        options: [";", ":", ".", "!"],
        answer: ".",
      },
      {
        question:
          "Which punctuation mark should be used between two independent clauses that are connected by a coordinating conjunction?",
        options: ["!", ";", ":", ","],
        answer: ",",
      },
      {
        question:
          "Which punctuation mark should be used to separate two items in a list?",
        options: [":", ";", "-", ","],
        answer: ",",
      },
    ],
  },
  {
    ai: false,
    section: "Passage",
    instructions:
      "Read the following passage and answer the questions that follow",
    passage:
      "My name is Kelvin. I was with my friend in the park. My friend's name is Jack. I had a ball and my friend had a frisbee. We sat under a willow tree. We had nothing else to do. We began to play catch. The game was very fun. We were very happy to play it. The leaves dropped from the tree. Jack stood up. He ran to take them. He came back. He threw them with our ball and we began to play. It was an entertaining game. We sat again and went on to play catch.  Another leaf dropped. It did not drop on our heads. I stood up and went to take it. It was a big leaf. We threw it with our ball and kept playing. We liked it. Then we went home. We told the story to our parents. They were happy to hear it. It is good to have trees.",
    questions: [
      {
        question:
          "Who is telling the story? _____________________________________",
        answer: "Kelvin",
      },
      {
        question: "Who is Jack? _____________________________________",
        answer: "Kelvin's friend",
      },
      {
        question:
          "Where did they sit? ____________________________________________",
        answer: "Under a willow tree",
      },
      {
        question: "What dropped from a tree? ________________________________",
        answer: "Leaves",
      },
      {
        question: "What were they doing under the tree? ______________________",
        answer: "Playing catch",
      },
    ],
  },
];
