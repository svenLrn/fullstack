let numberStore = [0, 1, 2];
let newNumber = 3;
// numberStore.push(newNumber);
// numberStore[3] = newNumber;
numberStore = [...numberStore, newNumber]
console.log(numberStore);