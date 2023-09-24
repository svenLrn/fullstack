const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const num = Math.random();
    resolve(num);
  } else {
    reject(new Error("error"));
  }
});

const secondPromise = new Promise((resolve, reject) => {
  firstPromise
    .then((num) => {
      if (num > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("error"));
      }
    })
    .catch((error) => {
      reject(error);
    });
});

let finalObject = {}

secondPromise
  .then((result) => {
    finalObject = result;
    console.log(finalObject)
    
  })
  .catch((error) => {
    console.error(error.message);
  });


  