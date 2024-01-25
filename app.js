const dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("First");
    break;
  case "Tuesday":
    console.log("Second");
    break;
  case "Wednesday":
    console.log("Third");
    break;
  case "Thursday":
    console.log("Fourth");
    break;
  case "Friday":
    console.log("Fifth");
    break;
  case "Saturday":
    conole.log("Sixth");
    break;
  case "Sunday":
    console.log("Seventh");
    break;
  default:
}

const numbers = [5, 6, 25, 26, 35, 56];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum += numbers[i];
}
console.log(sum);

const fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Melon"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i+1}:${fruits[i]}`);
}

const student = {
  name: "Ali",
  grade: "100",
};
const { grade } = student;
if (grade >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
