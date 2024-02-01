const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promise = Promise.all([promise1, promise2, promise3])
setTimeout(() => {
 console.log(promise)
}, 2000);
promise.then((value)=>{
    console.log(value)
   })



const promise4 = Promise.any([promise1, promise2, promise3])
setTimeout(() => {
 console.log(promise)
}, 2000);
promise4.then((value)=>{
    console.log(value)
   })




   //closures
   function myFunction() {
    const name = "taposh";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunction1 = myFunction();
  myFunction1();



  function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age " },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      
    //   var item = helpText[i];
      let item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    }
  }
  
  setupHelp();




// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
      
//       return function (d) {
       
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));
// console.log("hello")

const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };

  var newObject = function() {
    // console.log(this)
    console.log(`Greetings from $}`);
    // this.buildbrush()
  }; // Greetings from Madrid

  newObject.prototype.buildbrush = {
    name:"afj"
  }

  var chart =  new newObject()

 console.log(newObject.__proto__)



//es6 features
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);




  let a =[1,2,3,4]

  let b = [5,6,7]


  let c = [...a,...b]


  console.log(c)



  const manipulateArray = arr => {
    const filteredArray = arr.filter(num => num % 2 !== 0);
    const squaredArray = filteredArray.map(num => num * num);
    const sum = squaredArray.reduce((acc, val) => acc + val, 0);
    return sum;
  };
  
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(manipulateArray(numbers)); 

//higher order function
  const filterEven = x => x%2 === 0;  
console.log([1, 2, 3].filter(filterEven));  

class myClass {
    constructor(name, height) {
        this.name = name
        this.height = height
    }

    static staticProperty = 3;

    get name1() {

        //    var newtime =  this.staticProperty*7
        return this.name
    }




    name3() {
        delete this.name1
        return this.name

    }
    set name2(val) {
        this.name = val
    }
}

var myclass1 = new myClass("taposh", 34)

myclass1 = new myClass("taposh", 34)
myclass1.name2 = "sjhfkjsdh"


console.log("deleted the name1", myclass1.name1)
console.log(myClass.staticProperty)

class MyClass {
    static field1 = console.log("static field1");
    static {
        console.log("static block1");
    }
    static field2 = console.log("static field2");
    static {
        console.log("static block2");
    }
}
// 'static field1'
// 'static block1'
// 'static field2'
// 'static block2'
console.log(MyClass.field2)


class ClassWithStaticProperty {
    static staticProperty1 = 'Property 1';
    static staticProperty2;
    static {
        this.staticProperty2 = 'Property 2';
    }
}

console.log(ClassWithStaticProperty);



class Car{
    #myproperty;
    constructor(){
        this.#myproperty = "sjfslkjls"
    }

    get car(){
        return this.#myproperty
    }
}

var car1 = new Car

console.log("mycar",car1.car)









