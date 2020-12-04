# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Destructuring is a way to acces properties in objects. 

  Researched answer: "It’s a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables."




2. What are React lifecycle methods? Provide three examples.

  Your answer: React lifecycle methods refers to the phases a component goes through.

  Mounting : construnctor ()
             render()

  Updating : render ()

  Unmounting : componentWillUnmount ()

  Researched answer:  Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

                        The three phases are: Mounting, Updating, and Unmounting.





3. What is the difference between a class and an object?

  Your answer: A class is a blueprint that can create many objects, and an obeject is a key value pair that cointains and stores information.

  Researched answer: Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.



4. What is the difference between a HTML div and a span?

  Your answer: A div is a block element, and a span is an inline element.


  Researched answer: Both <div> and <span> is used to define parts of a web page. The <span> element shows the inline portion of a document. The <div> elements show a block-level portion of a document.

   A div is a block-level element and a span is an inline element.

  The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: React.Fragment is the shorthand version to write <div>

  Researched answer: Fragments lets you group a list of children without adding extra nodes to the DOM 



6. What does it mean to create a responsive web application? What are three options for creating responsive design?

  Your answer:A resposive web application considers the different typed of devices that a user could use to access the site. A resposive web application is design to automatically adapt to different disply sizes.

  Researched answer: 
  
  Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it. 
   Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
   Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
   Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.



7. What are props in React?

  Your answer: Props are used for passig data from one component to another.

 

  Researched answer:
   Props are arguments passed into React components. Props are passed to components via HTML attributes.



8. What is `this` in JavaScript?

  Your answer:
   This is a keyword that refers to the object it belongs to.

  Researched answer:
     It has different values depending on where it is used:
  In a method, this refers to the owner object.
  Alone, this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
  In an event, this refers to the element that received the event.
  Methods like call(), and apply() can refer this to any object.




9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:
  A ternary operator can be used to replace if..else statement.
  


  Researched answer: The conditional ternary operator in JavaScript assigns a value to a variable based on some condition and is the only JavaScript operator that takes three operands. The ternary operator is a substitute for an if statement in which both the if and else clauses assign different values to the same field, like so:


  




10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A function without a name.

  Researched answer: An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.
  



## Looking Ahead: Terms for Next Week
- Ruby
A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
- Object oriented programming
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
- RSpec
RSpec is a computer domain-specific language testing tool written in programming language Ruby to test Ruby code. 

- Instance variable
 An instance variable in ruby has a name starting with @ symbol, and its content is restricted to whatever the object itself refers to. Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.
- Ruby blocks
A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered.

- Ruby hashes
A Hash is a collection of key-value pairs 
- `getter` and `setter` methods in Ruby

Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class