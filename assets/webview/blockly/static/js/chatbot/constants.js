// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "boyellow", "tiyellow"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["glow red","on red","switch on red","turn on red","can you glow red","show me red","please glow red","red","show red"],
  ["glow green","on green","switch on green","turn on green","can you glow green","show me green","please glow green","green","show green"],
  ["glow blue","on blue","switch on blue","turn on blue","can you glow blue","show me blue","please glow blue","blue","show blue"],
  ["glow yellow","on yellow","switch on yellow","turn on yellow","can you glow yellow","show me yellow","please glow yellow","yellow","show yellow"],
  ["glow orange","on orange","switch on orange","turn on orange","can you glow orange","show me orange","please glow orange","orange","show orange"],
  ["glow violet","on violet","switch on violet","turn on violet","can you glow violet","show me violet","please glow violet","violet","show violet"],
  ["glow black","on black","switch on black","turn on black","can you glow black","show me black","please glow black","black","show black"],
   ["off","turn off smartlight"]

]


// Possible responses, in corresponding order

const replies = [
  ["Hello! I'm WizBuddy, your Learning buddy. How can I help you?", "Hi! I'm WizBuddy, your Learning buddy. How can I help you?", "Hey!", "Hi there!","I'm WizBuddy, your Learning buddy. How can I help you?"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["glowing red","smartlight glowing red"],
  ["glowing green","smartlight glowing green"],
  ["glowing blue","smartlight glowing blue"],
  ["glowing yellow","smartlight glowing yellow"],
  ["here is orange","smartlight glowing orange"],
  ["here is violet","smartlight glowing violet"],
  ["glowing black","smartlight glowing violet"],
  ["Train the wizbuddy for turning off smartlight","Train wizbuddy"]
  

]

// Random for any other user input

const alternative = [
  "Train wizbuddy",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]