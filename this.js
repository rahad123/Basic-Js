//The javascript (this) keyword refers to the object it belongs to.
//Basically, it has different values depending on wheres it is used.
// 1. In a method, this refers to the owner object.
// 2. Alone, this refers to the global object.
// 3. In a function, this refers to the global object.
// 4. In a function, in strict mode, this is undefiened.
// 5. In an event, this refers to the element that received the event.
// 6. Methods like (call()) and (apply()) can refer this to any object.

// Example - 1
function fullName(){
    return this.firstName + " " + this.lastName; // In this method (this) refers to the owner object. 
  }

// Example - 2
let x = this; // this refers to the global object. basically, it refers the window object.
            // In the blowser where window is a global object.
        
// Example - 3
function myfunction() {
    return this; // this refers global object. But, in strict mode it does not allow default binding.
}

// Example - 4 
<button onclick="this.style.display='none'"> 
  Click to Remove Me!
</button>
// In html event handlers, this refers to the html element that recieve the html event.

// Example - 5
let value = {
    firstName : "rahad",
    middleName : "habijabi",
    lastName : "shidul",
    email : "rahaddiu@gmail.com",
    
    add : function() { // (this) is the value object(the value object is the owner of the funciton) 
      console.log(this.firstName + " " + this.lastName)
    }
  };
  
  value.add();

  // Example - 6
  // the call() and apply() methods are predefined JavaScript method.


