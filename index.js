const input = require('sync-input');

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n");
let m1 = {
  name: "Teddy Bear",
  price: 10,
  id: 1
};
let m2 = {
  name: "Big Red Ball",
  price: 5,
  id: 2
};
let m3 = {
  name: "Huge Bear",
  price: 50,
  id: 3
};
let m4 = {
  name: "Candy",
  price: 8,
  id: 4
};
let m5 = {
  name: "Stuffed Tiger",
  price: 15,
  id: 5
};
let m6 = {
  name: "Stuffed Dragon",
  price: 30,
  id: 6
};
let m7 = {
  name: "Skateboard",
  price: 100,
  id: 7
};
let m8 = {
  name: "Toy Car",
  price: 25,
  id: 8
};
let m9 = {
  name: "Basketball",
  price: 20,
  id: 9
};
let m10 = {
  name: "Scary Mask",
  price: 75,
  id: 10
};
let masks = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
masks.forEach(function(mask) { console.log(mask.id + "- " + mask.name + ", Cost: " + mask.price + " tickets"); });
let tick = 0;
let tot = tick;

while(true) {

let del;

if(masks.length === 0){
  console.log("Wow! There are no gifts to buy.");
}

console.log("What do you want to do?");
console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");


  
  let ch = Number(input());

  if(ch === 5){
    console.log("Have a nice day!");
    break;
}
  
switch (ch) {
case 1:
    if(masks.length === 0){
  console.log("Wow! There are no gifts to buy.");
}
let buy = Number(input("Enter the number of the gift you want to get: "));
    if(isNaN(buy) == true){
      console.log("Please enter a valid number!");
    }else{
  switch (buy) {
      case 1:
      if(tick < m1.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m1.name}!`);
      tot = tick - m1.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m1), 1);
        console.log(masks.length);
      break;
      }
      case 2:
      if(tick < m2.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m2.name}!`);
      tot = tick - m2.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m2), 1)
        console.log(masks.length);
      break;
      }
      case 3:
      if(tick < m3.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m3.name}!`);
      tot = tick - m3.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m3), 1)
        console.log(masks.length);
      break;
      }
      case 4:
      if(tick < m4.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m4.name}!`);
      tot = tick - m4.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m4), 1)
        console.log(masks.length);
      break;
      }
      case 5:
      if(tick < m5.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m5.name}!`);
      tot = tick - m5.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m5), 1)
        console.log(masks.length);
      break;
      }
      case 6:
      if(tick < m6.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m6.name}!`);
      tot = tick - m6.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m6), 1)
        console.log(masks.length);
      break;
      }
      case 7:
      if(tick < m7.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m7.name}!`);
      tot = tick - m7.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m7), 1)
        console.log(masks.length);
      break;
      }
      case 8:
      if(tick < m8.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m8.name}!`);
      tot = tick - m8.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m8), 1)
        console.log(masks.length);
      break;
      }
      case 9:
      if(tick < m9.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m9.name}!`);
      tot = tick - m9.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m9), 1)
        console.log(masks.length);
      break;
      }
      case 10:
      if(tick < m10.price){
        console.log("You don't have enough tickets to buy this gift.");
        console.log("Total tickets: " + tot);
        break;
      }else{
      console.log(`Here you go, one ${m10.name}!`);
      tot = tick - m10.price;
      console.log("Total tickets: " + tot);
      
      masks.splice(masks.indexOf(m10), 1)
        console.log(masks.length);
      break;
      }
      default:
      console.log("There is no gift with that number!");
      break;
  }
        }
console.log("Have a nice day!");
break;
case 2:
    let add = Number(input("Enter the ticket amount: "));
    if(isNaN(add) == true){
      console.log("Please enter a valid number between 0 and 1000.");
    }else if(add > 1000){
      console.log("Please enter a valid number between 0 and 1000.");
    }else{
    tick = tick + add;
    console.log("Total tickets: " + tick);
    console.log("Have a nice day!");
break;
}
case 3:
    console.log("Total tickets: " + tot);
    console.log("Have a nice day!");
break;
case 4:
    console.log("Here's the list of gifts:\n");
    masks.forEach(function(mask) { console.log(mask.id + "- " + mask.name + ", Cost: " + mask.price + " tickets"); });
    console.log("Have a nice day!");
break;   
default:
console.log("Please enter a valid number!");
break;
}
}
