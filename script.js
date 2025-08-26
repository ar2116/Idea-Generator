const ideas = {
  coding: [
    "Build a personal portfolio website",
    "Create a to-do list app with localStorage",
    "Make a weather dashboard using an API",
    "Design a simple game like Snake or Pong",
    "Build a quiz app with a scoring system"
  ],
  recreation: [
    "Go for a 20-minute walk",
    "Try cooking a new recipe",
    "Play a board game with friends",
    "Read a chapter of a new book",
    "Listen to a new music genre"
  ],
  decor: [
    "Rearrange your living room furniture",
    "Add fairy lights to your room",
    "DIY wall art with recycled materials",
    "Create a cozy reading corner",
    "Use plants to brighten your space"
  ]
};

function getIdea(category) {
  const list = ideas[category];
  const idea = list[Math.floor(Math.random() * list.length)];
  document.getElementById("idea-box").innerText = idea;
}
