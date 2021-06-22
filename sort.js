var sortNumber = function(number) {
  number.sort(function(a, b) {
    if (a == b) {
      return 0;
    }
    return a < b ? -1 : 1;
  });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);

console.log("Hello! I'm a student!");
console.log("Hello. I am the teacher!");
console.log("This is rebase-practice1");
console.log("This is rebase-practice2");
console.log("This is rebase-practice3");

console.log("This is a bug. Please delete this line to fix the bug.");
