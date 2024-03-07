function Prima(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++)
      if (n % i === 0) return false;
    return true;
  }
  
  for (let i = 1; i <= 1000; i++) {
    if (Prima(i)) console.log(i);
  }