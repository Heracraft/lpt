let temp = {
  question: "If I _________________ to go, I would have gone.",
  options: ["wanted", "had wanted", "would want", "have wanted"],
  answer: "wanted",
  selection: "wanted",
  evaluation: {
    marked: true,
    correct: true,
  },
};

let xz
xz=new Object()

for(let key of Object.keys(temp)){
  if(key!="evaluation"){
    xz[key]=temp[key]
  }
}
xz