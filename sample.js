for (let i = 1; i <= 5; i++) {
  let result = "";

  for (let j = 1; j <= 5 - i; j++) {
    result += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    result += "*";
  }

  console.log(result);
}