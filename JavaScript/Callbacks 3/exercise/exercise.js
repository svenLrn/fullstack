const repeatHello = callback =>{
    const interval = setInterval(() => {
        callback()
    }, 1000);
    setTimeout(() => {
        clearInterval(interval)
    }, 5000);
}

const sayHello = () =>{
    console.log('Hello')
}
repeatHello(sayHello);

// Arrow functions maintain the 'this' value of the containing scope, making them more predictable and less error-prone when used as callbacks in certain situations.
