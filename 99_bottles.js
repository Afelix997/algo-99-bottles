function bottleSong(numBeer) {
  
 while (numBeer>1){
    console.log(` ${numBeer} bottles of beer on the wall, ${numBeer} bottles of beer.`);
     if (numBeer>2){ 
         console.log(` Take one down and pass it around, ${numBeer-1} bottles of beer on the wall.`)
     } else { console.log(` Take one down and pass it around, 1 bottle of beer on the wall.`)}
        numBeer--
   } console.log(` 1 bottle of beer on the wall, 1 bottle of beer.\n Take one down and pass it around, 
   no more bottles of beer on the wall.\n No more bottles of beer on the wall, no more bottles of beer.\n 
   Go to the store and buy some more, ${numBeer} bottles of beer on the wall.`)
}

