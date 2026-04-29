// Real-World Examples of Closures
// ✅ 1. Button Click Counter

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const click = createCounter();
click(); // 1
click(); // 2

// 👉 Each click remembers previous value
///////------///////


// ✅ 2. setTimeout (VERY COMMON)

function greet(name) {
  setTimeout(function () {
    console.log("Hello " + name);
  }, 1000);
}

greet("Ali");

// 👉 Even after greet() finishes,
// name is remembered → closure

///////------///////



// ✅ 3. Private data (Real App Pattern)

function bankAccount() {
  let balance = 1000;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    }
  };
}

const acc = bankAccount();
acc.deposit(500); // 1500

//👉 balance is protected (can’t access directly)

///////------///////