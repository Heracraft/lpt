export const questions = [
  {
    section: "Vocabulary",
    ai:false,
    selected:true,
    instructions:
      "Choose the word with the closest meaning to the underlined word",
    questions: [
      {
        question: "The detective was very <u>astute</u> in his investigation.",
        options: ["clever", "naive", "stupid", "gullible"],
        answer: "clever",
      },
      {
        question: "The plant was very <u>arid</u> due to the lack of water.",
        options: ["dry", "wet", "moist", "drenched"],
        answer: "dry",
      },
      {
        question:
          "The football match was very <u>intense</u> with both teams playing their best.",
        options: ["exciting", "boring", "dull", "tedious"],
        answer: "exciting",
      },
      {
        question:
          "The athlete was very <u>nimble</u> on his feet, moving quickly and easily.",
        options: ["slow", "clumsy", "awkward", "agile"],
        answer: "agile",
      },
      {
        question:
          "The criminal was very <u>elusive</u>, managing to evade the police multiple times.",
        options: ["obvious", "evident", "clear", "difficult to catch"],
        answer: "difficult to catch",
      },
      {
        question:
          "The magician was very <u>skilled</u>, performing amazing tricks that amazed the audience.",
        options: ["unskilled", "inexperienced", "amateurish", "expert"],
        answer: "expert",
      },
      {
        question:
          "The scientist was very <u>meticulous</u>, making sure every detail was accounted for.",
        options: ["careless", "sloppy", "imprecise", "thorough"],
        answer: "thorough",
      },
    ],
  },
  {
    section: "Grammar",
    ai:false,
    selected:true,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "I _____________ my homework every day.",
        options: ["do", "does", "did", "done"],
        answer: "do",
      },
      {
        question: "They ____________ to go to the beach last weekend.",
        options: ["decide", "decided", "decides", "will decide"],
        answer: "decided",
      },
      {
        question: "She _____________ playing the piano very well.",
        options: ["plays", "played", "play", "is playing"],
        answer: "plays",
      },
      {
        question: "He ____________ his phone on the table.",
        options: ["puts", "put", "putting", "will put"],
        answer: "put",
      },
      {
        question: "The birds ____________ in the trees.",
        options: ["sing", "sang", "sings", "will sing"],
        answer: "sing",
      },
      {
        question: "I _____________ a book when the phone rang.",
        options: ["was reading", "read", "reads", "am reading"],
        answer: "was reading",
      },
      {
        question:
          "She ____________ to her friends on the phone when her mother came in.",
        options: ["was talking", "talked", "talks", "will talk"],
        answer: "was talking",
      },
    ],
  },
  {
    section: "Reading Comprehension",
    selected:true,
    instructions: "Read the passage below and answer the questions that follow",
    passage:
      "Tommy was an ordinary boy who lived in a small village. He had always dreamed of going on an adventure, but he never had the chance. One day, he found a map that led to a hidden treasure. The treasure was said to be guarded by a fierce dragon. Tommy decided to go on a quest to find the treasure. He packed some food, a tent and a sword, and set off on his journey. After many days of walking, Tommy finally reached the mountain where the treasure was hidden. As he climbed the mountain, he could feel the dragon's fiery breath on his back. When he finally reached the top, he saw the dragon guarding the treasure. Tommy took a deep breath, drew his sword, and charged at the dragon. The dragon breathed fire, but Tommy dodged it and struck the dragon with his sword. The dragon fell to the ground, defeated. Tommy opened the treasure chest and found a pile of gold coins. He was overjoyed with his success, and he returned home a hero.",
    questions: [
      {
        question: "What did Tommy find that led to a hidden treasure?",
        options: ["A map", "A sword", "A tent", "Some food"],
        answer: "A map",
      },
      {
        question: "What was guarding the treasure?",
        options: ["A snake", "A lion", "A dragon", "A bear"],
        answer: "A dragon",
      },
      {
        question: "What did Tommy pack for his journey?",
        options: [
          "A map, a sword, and a tent",
          "Some food, a sword, and a tent",
          "Some food, a map, and a book",
          "A map, a book, and a pen",
        ],
        answer: "Some food, a tent and a sword",
      },
      {
        question: "How did Tommy defeat the dragon?",
        options: [
          "He ran away",
          "He tickled it",
          "He shot it with a gun",
          "He struck it with his sword",
        ],
        answer: "He struck it with his sword",
      },
      {
        question: "What did Tommy find in the treasure chest?",
        options: [
          "A pile of rocks",
          "A pile of gold coins",
          "A pile of sticks",
          "A pile of leaves",
        ],
        answer: "A pile of gold coins",
      },
    ],
    ai: false,
  }
];
