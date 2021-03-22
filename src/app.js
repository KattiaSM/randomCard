import "bootstrap";
import "./style.css";

window.onload = () => {
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var shape = ["Diamonds", "Spades", "Hearts", "Clubs"];
  var randomCardNumber = Math.floor(Math.random() * numbers.length);
  var randomShapeNumber = Math.floor(Math.random() * shape.length);
  var choseShape = shape[randomShapeNumber];

  //agregar el content a la card
  document.getElementById("cardContent").innerHTML = numbers[randomCardNumber];
  document.getElementById("theCard").classList.add("card");
  document.getElementById("theCard").classList.add("getshape"(choseShape));
};

//retorna el numero y shape aleatorio
getshape => {
  switch (getshape) {
    case "Diamonds":
      return "shape-diamonds";
    case "Spades":
      return "shape-spades";
    case "Hearts":
      return "shape-hearts";
    case "Clubs":
      return "shape-clubs";
  }
};
