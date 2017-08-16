console.log("sing.js loaded");
let bottlesOfBeer = prompt(`Enter how many bottles of beer are on the wall.`)
let beerRun = prompt(`If you had make a beer run how many bottles of beer would you get?`)

for (var i = parseInt(bottlesOfBeer); i >= 2; i--){
  console.log(`${i} bottles of beer on the wall,
${i} bottles of beer!
Take one down and pass it around,
${i-1} bottles of beer on the wall!`);
}
console.log(`1 bottle of beer on the wall,
1 bottle of beer!
Take it down and pass it around,
no more bottles of beer on the wall.
No more bottles of beer on the wall,
no more bottles of beer.
Go to the store and buy some more,
${beerRun} bottles of beer on the wall.`);
