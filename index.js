// Write your code in this file!

function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return "This one is on me!"}
  else if (rideLength > 2000 && rideLength < 2500) {
    return "I will gladly take your thirty bucks."}
  else if (rideLength > 2500){
   return "No can do."}
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(input){
  case "generous":
    return "Thank you so much.";
    break;
  case "not as generous":
    return "Thank you.";
    break;
  default:
    return "Bye.";
    break;
}
