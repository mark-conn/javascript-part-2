//sorts an array of strings, determines longest string
function sortStrings(arr) {
    return arr.sort(function(a, b) {
        return b.length - a.length;
    })
}

sortStrings(["huuuuuuge", "huger", "tiny"]);



/*Create an array of objects.  Will contain name and email property.
then sort your array by longest name.  Then sort array by email */
/*Create an array of objects.  Will contain name and email property.
then sort your array by longest name.  Then sort array by email */

var arrayOfObjects = [
    { name: "Fred", email: "Freddingus@gmail.com" },
    { name: "Frank", email: "frankdIngus@gmail.com" },
    { name: "Bob", email: "BobdiNgus@gmail."}
    ]
    
arrayOfObjects.sort(function(a,b) {
    return b.name.length - a.name.length;
})



function makeLower() {

    for(var i=0; i < arrayOfObjects.length; i++) {
        arrayOfObjects[i].name = arrayOfObjects[i].name.toLowerCase();
        arrayOfObjects[i].email = arrayOfObjects[i].email.toLowerCase()
    } return arrayOfObjects;

}

makeLower();


arrayOfObjects.sort(function(a,b) {
    var x = a.email;
    var y = b.email;
    
    if (x < y) { 
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});



/*Create a function that can be used with Array.prototype.map. 
This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.
*/


var numbers = [1,2,3,4,5,6];

function squares(arr) {
    return arr.map(function(num) {
    return num * num;
});
}

//console.log(squares(numbers));

/*Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each 
containming a “num” property */
function squareNum(array) {
    return array = array.map(function(obj){
            obj.num = obj.num * obj.num;
            return obj;
        })
}

var arrayOfNumObjs = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
    
    ]


//console.log(squareNum(arrayOfNumObjs));


//


//Operation Maker
function operationMaker(operation) {
    return function decider(num1, num2) {
    switch(operation) {
          case 'add':
              return num1 + num2;
              break;
          case 'subtract':
              if(num1 >= num2) {
                  return num1 - num2;
              } else {
                  return num2 - num1;
              }
              break;
          case 'mult':
              return num1 * num2;
              break;
          case 'div':
              return num1 / num2;
              break;
          default:
              return 0;
            }
        }
    }


var adder = operationMaker('add');
var sum = adder(5,15);

var divider = operationMaker('div');
var ratio = divider(6,2);





