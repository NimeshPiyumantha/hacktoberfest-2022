//  Method 1
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

//  Method 2
function getPrime(until) {
  let factor;
  for (let i = 0; i < n; i++) {
    factor = 0;
    for (let j = 1; j <= n; j++) {
      if (i % j == 0) {
        factor++;
      }
    }
    if (factor == 2) console.log(i);
  }
} 
