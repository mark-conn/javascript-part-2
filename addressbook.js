/* ## Address book
* Create a file called `addressbook.js`, then do the following. Commit and push as often as you like so that we can monitor the progress of your work in the pull request.
  * Create a constructor function called `Person` that can create new persons. It takes `firstName`
   and `lastName` as arguments, and assigns them to the new object. In addition to that, 
   the constructor function will assign each person an 
   `emails` property that will be an empty array.
   
  * Create a constructor function called `Email` that can create a new email address. 
    It takes `address` and `type` as arguments. It will assign `address` to the new object. 
    For `type`, check if it's in the list (work, home, other). 
    If it's not in the list, set the type to "other".
    
  * Add an `addEmail` function to the *prototype of `Person`*. This function will be 
    available to all objects created using `new Person`. The `addEmail` function should 
    take an email address and type as arguments, call the `Email` constructor to create a 
    new email object, then *`push`* that email object to the `emails` of the person.
    
  * Finally test your code by creating a person and giving them a home and work email.
*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
}

function Email(address, type) {
    this.address = address;
    this.type = this.setType(type);
}

Person.prototype.addEmail = function(address, type) {
    this.email.push(new Email(address, type));
};

Email.prototype.setType =  function (type) {
         var list = ['work', 'home', 'other'];
         var defaultValue = 'other'
         list.forEach(function(input) {
             console.log(input, type);
         if(input === type){
             defaultValue = input
         }
     })
     return defaultValue;
     }

var me = new Person('mark', 'conn');
me.addEmail('mark.conn@gshit.com', 'work')

//console.log(me);
