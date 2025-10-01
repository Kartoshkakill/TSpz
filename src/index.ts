let username: string = "Mykola";
let age: number = 20;
let isStudent: boolean = true;

function getInfo(name: string, years: number, student: boolean): string {
  return `Name: ${name}, Age: ${years}, Student: ${student ? "Yes" : "No"}`;
}

console.log(getInfo(username, age, isStudent));
