function bottleSong(numBeer) {
  let tot=numBeer
  while (numBeer>1){
     console.log(`${numBeer} bottles of beer on the wall, ${numBeer} bottles of beer.`);
      if (numBeer>2){ 
          console.log(`Take one down and pass it around, ${numBeer-1} bottles of beer on the wall.`)
      } else { console.log(`Take one down and pass it around, 1 bottle of beer on the wall.`)}
         numBeer--
    } console.log(`1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, 
  no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.\n 
  Go to the store and buy some more, ${tot} bottles of beer on the wall.`)
 }
 
 bottleSong(10)
