function fizzBuzz(string1, string2) {
  let result = string1 + string2;
  if (Number.isInteger(string1.length / 3)) {
    console.log(string1);
  } else if (Number.isInteger(string2.length / 5)) {
    console.log(string2);
  } else if (
    Number.isInteger(result.length / 3) &&
    Number.isInteger(result.length / 5)
  ) {
    console.log(string1 + string2);
  } else {
    console.log(
      `${string1} is not divisible by 3 and ${string2} is not divisible by 5`
    );
  }
}

fizzBuzz("fizz", "Buzz");
