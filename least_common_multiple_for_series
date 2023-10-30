/* Smallest Common Multiple */
/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr){

  //Find the highest and lowest of the pair passed in
  let bottom = 0;
  let top = 0;
  if (arr[0] > arr[1]){
    top = arr[0];
    bottom = arr[1]
  }
  else{
    top = arr[1];
    bottom = arr[0];
  }
  // Set up prime lookup tables
  let primeFactors = new Map();
  primeFactors.set(2, [2]);
  primeFactors.set(3, [3]);
  let primes = [2, 3];

  // Find the prime factors for all numbers below top value
  for (let i = 4; i < top+1; i++){
    findPrimeFactors(i, primeFactors, primes);
  }

  // Count the highest number of each prime in the range
  let mostPrime = new Map();
  for (let factors of primeFactors){
    // check if the number is in the given range
    if (factors[0] >= bottom && factors[0] <= top){
      //console.log(factors);
      let primeCount = new Map();
      // count the prime factors for that number
      for (let f of factors[1]){
        if (primeCount.has(f)){
          primeCount.set(f, primeCount.get(f)+1);
        }
        else{
          primeCount.set(f, 1);
        }    
      }
      // check if any of the counts are more that mostPrime and set mostPrime if so
      for (let p of primeCount){
        //console.log("p", p);
        if (mostPrime.has(p[0])){
          if (p[1] > mostPrime.get(p[0])){
            mostPrime.set(p[0], p[1]);
          }
        }
        else{
            mostPrime.set(p[0], p[1]);
        }
      }
      //console.log("primeCount", primeCount);
    }
  }
  //console.log("mostPrime", mostPrime);
  //console.log("Primes:", primes);

  let leastCommonMultiple = 1;
  for (let most of mostPrime){
    leastCommonMultiple *= most[0] ** most[1];
  }

  return leastCommonMultiple; 
}

function findPrimeFactors(num, primeFactors, primes){
  if (num == 1){
    return [1];
  }
  if (primeFactors.has(num)){
    return [...primeFactors.get(num)];
  }
  for (let prime of primes){
    if (num % prime == 0){
      //console.log("num in loop and if", num);
      primeFactors.set(num, findPrimeFactors(num/prime, primeFactors, primes));
      //console.log("num in loop after primefactors", num);
      //console.log(num, primeFactors.get(num));
      primeFactors.get(num).push(prime);
      return [...primeFactors.get(num)];
    }
  }
  if (num < primes[primes.length-1]**2){
    primes.push(num);
    primeFactors.set(num, [num]);
    return [...primeFactors.get(num)];
  }
  console.log("shouldn't get here");
}

//console.log(smallestCommonsBF([1,5]));
console.log(smallestCommons([23,18]));

function smallestCommonsBF(arr) {
  //brute force
  let bottom = 0;
  let top = 0;
  if (arr[0] > arr[1]){
    top = arr[0];
    bottom = arr[1]
  }
  else{
    top = arr[1];
    bottom = arr[0];
  }
  let i = top + 1;
  while(true){
    i++
    let found = true;
    for (let j = bottom; j <= top; j++)
    {
      if (i % j != 0){
        found = false;
        break;
      }
    }
    if (found){
      return i;
    }

  }
}