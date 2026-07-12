function makeArray(firstArray, secondArray, maxLength) {
   const i = firstArray.concat(secondArray);

   if (i.length > maxLength) {
       return i.slice(0, maxLength);
   }
    
}
