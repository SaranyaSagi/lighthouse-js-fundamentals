const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log(ingredients);
// Write a while loop that prints out the contents of ingredients:
console.log("     While loop for ingredients")
let w = 0
while (w<ingredients.length) {
  console.log(ingredients[w]);
  w++
};

// Write a for loop that prints out the contents of ingredients:
console.log("     for loop for ingredients");
for (let i=0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
};

// Write any loop (while or for) that prints contents backwards: so from bananas to eggs
console.log("    loop to print list of ingredients in reverse")
for (let x=ingredients.length -1; x>=0; x--) {   //start at -1 end of string
  console.log(ingredients[x]);
 }

//console.log(ingredients);
