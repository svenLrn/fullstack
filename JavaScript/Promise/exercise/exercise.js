const number = 15;

const checkNumberPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("resolve");
  } else {
    reject("reject");
  }
});

checkNumberPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
