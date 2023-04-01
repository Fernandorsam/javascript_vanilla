person = {
  incomes : [1289.98,2043,833.11,],
  expenses : [1758,32,1658.11,1395]
}

function sumOfperson(values){
  let total = 0;
  for (const iterator of values) {
     total += iterator
  }
  return total;
  
    
  }

  function calculateBalance(){
    let totalCalBalance = 
    sumOfperson(person.incomes) -sumOfperson(person.expenses);
    return totalCalBalance;
  }

  function validateBalance(valueBalance){
  return valueBalance < 0 ? 'NEGATIVE' : 'POSITIVE';
 
    
   
  }

  console.log(`${calculateBalance()} IS ${validateBalance(calculateBalance())}`);

