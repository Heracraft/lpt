export const questions=[
  {
    section: "Tenses",
    selected:true,
    ai:false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      {
        question: "Peter ____________________a letter to his father last week",
        options: ["write", "wrote", "writing", "writes"],
        answer:"wrote",
      },
      {
        question:
          "My aunt and uncle are________________ to Dar es salaam next week.",
        options: ["will", "going", "goes", "went"],
        answer:"going",
      },
      {
        question: "My mother _____________delicious food at the present.",
        options: ["cooks", "is cooking", "cook", "cooked"],
        answer:"is cooking",
      },
      {
        question: "He _______to the market every Saturday.",
        options: ["goes", "go", "going", "went"],
        answer:"goes",
      },
      {
        question: "Yesterday I ___________a nice picture.",
        options: ["draw", "drawing", "drew", "draws"],
        answer:"drew",
      },
      {
        question: "My uncle will ___________to Arusha next year.",
        options: ["comes", "come", "coming", "came"],
        answer:"come",
      },
      {
        question: "It ______________raining now.",
        options: ["is", "am", "are", "was"],
        answer:"is"
      },
    ],
  },
  {
    section: "Grammar",
    selected:true,
    ai:false,
    instructions:
      "Choose the correct answer from the given options in each question",
    questions: [
      
      {
        question: "The opposite of strong is ___________________",
        options: ["weak", "weakest", "weaker", "strong"],
        answer:"weak"
      },
      {
        question: "Which is the ________________mountain in Africa.",
        options: ["highest", "higher", "high", "more high"],
        answer:"highest"
      },
      {
        question: "We wash our bodies ____________water and soap.",
        options: ["of", "without", "with", "and"],
        answer:"with"
      },
      {
        question: "That car is his. It belongs to _________________",
        options: ["he", "his", "him", "theirs"],
        answer:"him"
      },
      {
        question: "_______________sun rises from the East.",
        options: ["a", "an", "the", "on"],
        answer:"the"
      },
      {
        question: "Is there ______________money in your pocket?",
        options: ["some", "any", "much", "alot of"],
        answer:"any"
      },
    ],
  },
  {
    section: "Fill in the blanks",
    ai:false,
    instructions: " Write only one word to represent the following",
    questions: [
      {
        question: "A person who repairs cars or lorries. ____________________",
        answer:"Mechanic"
      },
      {
        question:
          "Chairs, tables, beds, cupboards. ___________________________",
          answer:"Furniture"
      },
      {
        question:
          "Milk, tea, coffee, soda. ______________________________________",
          answer:"Drinks"
      },
      {
        question:
          "22. Cabbage, carrot, peas, spinach. ____________________________",
          answer:"Vegetables"
      },
    ],
  },
  {
    ai:false,
    section: "Singular and plural",
    instructions:
      "Change the plural words into singular and singular to plural. give the answer as an object containing the answer and its noun form",
    questions: [
      {
        question: "Sheep",
        nounForm:"singular",
        answer: "Sheep",
      },
      {
        question: "Cities",
        nounForm:"plural",
        answer: "City",
      },
      {
        question: "Mangoes",
        nounForm:"plural",
        answer: "Mango",
      },
      {
        question: "Chair",
        nounForm:"singular",
        answer: "Chairs",
      },
      {
        question: "Key",
        nounForm:"singular",
        answer: "Keys",
      },
    ],
  },
  {
    ai:false,
    section: "Passage",
    instructions:
      "Read the following passage and answer the questions that follow",
    passage:
      "My name is Rehema. I was with my sister in the garden. My sister's name is Tina. I had a knife my sister had a book. We sat under a mango tree. We had nothing else to do. We began to read a story book. The story was very good. We were very happy to read it.  The mango dropped from the tree. Tina stood up. She ran to take it. She came back. She cut it with our knife and we began to eat it. It was sweet fruit. We sat again and went on to read our story.  Another mango dropped. It did not drop on our heads. I stood up and went to take it. It was a big mango. We cut it with our knife and ate it. We liked it. Then we went home. We told the story to our father and mother. They were happy to hear it. It is good to have fruit trees.",
    questions: [
      {
        question:
          "Who is telling the story? _____________________________________",
            answer: "Rehema"  
      },
      {
        question: "Who is Tina? _____________________________________",
            answer: "Rehema's sister"
      },
      {
        question:
          "Where did they sit? ____________________________________________",
            answer: "Under a mango tree"  
      },
      {
        question: "What dropped from a tree? ________________________________",
            answer: "Mangoes"
      },
      {
        question: "What were they doing under the tree? ______________________",
            answer: "Reading a story book"
      },
    ],
  },
]