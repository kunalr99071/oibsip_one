let display = document.getElementById("result");

let clear = document.getElementById("clear");
clear.addEventListener("click", function() {
  display.value = "";
});

let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    if (display.value != "") {
      display.value += this.innerHTML;
    }
  });
}

let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    display.value += this.innerHTML;
  });
}

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", function() {
  if (!display.value.includes(".")) {
    display.value += this.innerHTML;
  }
});

let equals = document.getElementById("equals");
equals.addEventListener("click", function() {
  if (display.value != "") {
    let result = eval(display.value);
    display.value = result;
  }
});

let del = document.getElementById("delete");
del.addEventListener("click", function() {
  display.value = display.value.slice(0, -1);
});
