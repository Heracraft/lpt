export const questions = [
  {
    section: "Recite the Alphabet",
    ai: false,
    instructions: "Write out all the letters of the alphabet in sequence",
    questions: [
      {
        question: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        answer: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
    ],
  },
  {
    ai: false,
    section: "Singular and plural",
    instructions:
      "Change the plural words into singular and singular to plural. give the answer as an object containing the answer and its noun form",
    questions: [
      {
        question: "Cows",
        nounForm: "singular",
        answer: "Cows",
      },
      {
        question: "Villages",
        nounForm: "plural",
        answer: "Village",
      },
      {
        question: "Apples",
        nounForm: "plural",
        answer: "Apple",
      },
      {
        question: "Table",
        nounForm: "singular",
        answer: "Tables",
      },
      {
        question: "Box",
        nounForm: "singular",
        answer: "Boxes",
      },
    ],
  },
  {
    section: "Vocabulary",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "The opposite of big is ___________________",
        options: ["smaller", "smallest", "small", "biggest"],
        answer: "small",
      },
      {
        question: "Which is the ________________city in Africa.",
        options: ["largest", "larger", "large", "more large"],
        answer: "largest",
      },
      {
        question: "We use a ____________brush to clean our teeth.",
        options: ["tooth", "teeth", "brushing", "toothbrush"],
        answer: "toothbrush",
      },
      {
        question: "That book is mine. It belongs to _________________",
        options: ["you", "yours", "me", "mine"],
        answer: "mine",
      },
      {
        question: "_______________moon sets in the West.",
        options: ["a", "an", "the", "on"],
        answer: "the",
      },
      {
        question: "Do you have ______________books in your library?",
        options: ["some", "any", "many", "alot of"],
        answer: "any",
      },
    ],
  },
  {
    section: "Adjectives",
    selected: true,
    ai: false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "The cat is _____________",
        options: ["hungry", "hugry", "hanger", "hongry"],
        answer: "hungry",
      },
      {
        question: "The boy was ___________when he saw the snake.",
        options: ["frighten", "scared", "scareing", "scaring"],
        answer: "scared",
      },
      {
        question: "My aunt is ____________this morning.",
        options: ["happy", "happying", "happied", "happier"],
        answer: "happier",
      },
      {
        question: "The food was _____________last night.",
        options: ["tasty", "testy", "tastying", "tasteing"],
        answer: "tasty",
      },
      {
        question: "The student was _________with his teacher.",
        options: ["angry", "angre", "angering", "angered"],
        answer: "angered",
      },
      {
        question: "The sky was ___________yesterday.",
        options: ["blue", "blues", "bluer", "bluing"],
        answer: "blue",
      },
      {
        question: "The dog was __________when its owner arrived home.",
        options: ["excited", "exicting", "excite", "exicted"],
        answer: "excited",
      },
    ],
  },
  {
    ai: false,
    section: "Passage",
    instructions:
      "Read the following passage and answer the questions that follow",
    passage:
      "My name is James. I was with my friends in the park. My friends' names are Freddy, Lisa and John. We had a ball and some chalk. We sat on the grass and started to play a game. The game was very fun. We were laughing and having a great time. Suddenly, an apple fell from a tree. Freddy jumped up and grabbed it. He came back and started to draw a picture with the chalk. It was amazing! We all watched and admired the artwork. Another apple dropped. This time, Lisa went and got it. She cut it with our knife and we began to eat it. It was so sweet and delicious. After that, we went back home. We told our families about the game and the apple drawing. They were really happy to hear it. It is good to have fruit trees.",
    questions: [
      {
        question:
          "Who is telling the story? _____________________________________",
        answer: "James",
      },
      {
        question:
          "What were Freddy, Lisa and John doing? ______________________",
        answer: "Playing a game",
      },
      {
        question:
          "What did Freddy do? ___________________________________________",
        answer: "Drew a picture with chalk",
      },
      {
        question:
          "What did Lisa do? ____________________________________________",
        answer: "Cut an apple with a knife",
      },
      {
        question:
          "Where did they go after the game? ___________________________",
        answer: "Back home",
      },
    ],
  },
];
