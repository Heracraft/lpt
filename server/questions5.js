export let questions = [
  {
    section: "Choose the correct word",
    ai: false,
    instructions:
      "Read each sentence carefully and select the best word to complete it",
    questions: [
      {
        question:
          "A person who drives a car for a living. ____________________",
        answer: "Driver",
        
      },
      {
        question: "Animals, birds, reptiles. ___________________________",
        answer: "Creatures",
        
      },
      {
        question:
          "Metal, plastic, wood, glass. ______________________________________",
        answer: "Materials",
        
      },
      {
        question:
          "Sports, outdoor activities, team games. ____________________________",
        answer: "Exercise",
        
      },
    ],
  },
  {
    ai: false,
    section: "Nouns and adjectives",
    instructions:
      "Change the nouns and adjectives into their opposites. Give the answer as an object containing the answer and its noun or adjective form",
    questions: [
      {
        question: "Good",
        nounAdjectiveForm: "adjective",
        answer: "Bad",
        
      },
      {
        question: "Friend",
        nounAdjectiveForm: "noun",
        answer: "Enemy",
        
      },
      {
        question: "Tall",
        nounAdjectiveForm: "adjective",
        answer: "Short",
        
      },
      {
        question: "Cheerful",
        nounAdjectiveForm: "adjective",
        answer: "Gloomy",
        
      },
      {
        question: "Heavy",
        nounAdjectiveForm: "adjective",
        answer: "Light",
        
      },
    ],
  },
  {
    section: "Capitalization",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question:
          "Where does the capital letter go in 'I will go to the beach this weekend'?",
        options: [
          "At the beginning of the sentence",
          "After 'will'",
          "After 'the'",
          "At the end of the sentence",
        ],
        answer: "At the beginning of the sentence",
        
      },
      {
        question:
          "Which word should be capitalized in the title 'the secret life of cats'?",
        options: ["The", "Secret", "Life", "Cats"],
        answer: "The",
        
      },
      {
        question:
          "Which word should be capitalized in this sentence: 'We visited the grand canyon last month'? ",
        options: ["We", "Visited", "Grand", "Canyon"],
        answer: "Grand",
        
      },
      {
        question:
          "Which word should be capitalized in the sentence: 'i saw a movie after school yesterday'?",
        options: ["I", "Saw", "Movie", "After"],
        answer: "I",
        
      },
    ],
  },
  {
    ai: false,
    section: "Passage",
    instructions:
      "Read the following passage and answer the questions that follow",
    passage:
      "I was walking with my friend Tom in the park. We saw a couple having a picnic under an oak tree. They seemed to be enjoying themselves. We stopped to watch them, and they invited us to join them. We thanked them and accepted the offer. They had some sandwiches, drinks, and fruits. We talked about what had happened during the week and shared some stories. Then we started a game of catch using a Frisbee. It was exciting and fun. The sun was setting and the leaves were dropping from the tree. We kept playing until it was time to go home. We said goodbye and promised to meet again soon.",
    questions: [
      {
        question:
          "Who is telling the story? _____________________________________",
        answer: "I",
        
      },
      {
        question: "Who were the couple? _____________________________________",
        answer: "Having a picnic",
        
      },
      {
        question:
          "Where did they sit? ____________________________________________",
        answer: "Under an oak tree",
        
      },
      {
        question: "What did they play? ________________________________",
        answer: "Catch with a frisbee",
        
      },
      {
        question: "What was falling from the tree? ______________________",
        answer: "Leaves",
        
      },
    ],
  },
  {
    section: "Conditionals",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "If I _________________ rude, apologize.",
        options: ["was", "had been", "would be", "am"],
        answer: "was",
        
      },
      {
        question:
          "If he ________________ working, he would have finished by now.",
        options: ["were", "had been", "would be", "is"],
        answer: "were",
        
      },
      {
        question: "If they ___________________ late, they will miss the train.",
        options: ["are", "had been", "will be", "were"],
        answer: "are",
        
      },
      {
        question: "If I ___________________ you, I would do it differently.",
        options: ["were", "was", "had been", "am"],
        answer: "were",
        
      },
      {
        question: "If we __________________ more time, we could finish it.",
        options: ["had", "have", "will have", "were having"],
        answer: "had",
        
      },
      {
        question: "If he ____________________ here, he could help you.",
        options: ["weren't", "wasn't", "hadn't been", "had been"],
        answer: "wasn't",
        
      },
    ],
  },
];
