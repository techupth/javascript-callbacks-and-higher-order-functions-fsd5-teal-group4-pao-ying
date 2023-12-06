//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count=0
  for (let i=0;i<array.length;i++){
    
    console.log(array[i])
    if (operation(array[i])){  
      count++
      
  }
  
}
console.log(count)
return count>=5 ?true:false
         
}

function score70(score){
  console.log(score)
  return score>=70? true:false
}


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,score70)
console.log(`At least five students scored a 70 in room 1: ${scoreRoom1Result}`);

let scoreRoom2Result = atLeastFive(studentScoresRoom2,score70);
console.log(`At least five students scored a 70 in room 2: ${scoreRoom2Result}`);

let scoreRoom3Result = atLeastFive(studentScoresRoom3,score70);
console.log(`At least five students scored a 70 in room 3: ${scoreRoom3Result}`);
