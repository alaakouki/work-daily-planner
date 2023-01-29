// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // // // TODO: Add code to display the current date in the header of the page.
});


// this to show current day at header
var currentDay = $('#currentDay');
currentDay.text( dayjs().format('dddd, DD MMM YYYY'));





// // // // // // // var whatIs = dayjs().get('hour');
// // // // // // // console.log(whatIs);


var dayHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


for (var x = 0; x < dayHours.length; x++) {
var xEquals = dayjs().hour(x);
// console.log(xEquals);

// if () {

// }
};


// ===================================================




// var hour = today.getHours();
// var minute= today.getMinutes();
// var second = today.getSeconds();

// var prepand = ( hour >= 12) ? " PM" : " AM";
// hour = (hour >= 12) ? hour - 12 : hour;




// // it worked as our date & time
// var today = new Date();
// console.log(today);

var saveBtn = $('.saveBtn');
// saveBtn.on('click', funtion() {

// });


// var past = $('.past');
// var present = $('.present');
// var future = $('.future');

// .addclass('past');
// .addclass('present');
// .addclass('future');


// this


// hour-x -id





// ===================================================

// // Comments show the vanilla JavaScript equivalent statements

// // var rootEl = document.getElementById("root");
// var rootEl = $('#root');

// // var titleEl = document.createElement("h1");
// var titleEl = $('<h1>');

// // titleEl.textContent = "Hello friends";
// titleEl.text('Hello friends');

// // titleEl.className = 'fancy';
// titleEl.attr('class', 'fancy');

// // titleEl.classList.add('p-5') - (`p-5` is for padding)
// titleEl.addClass('p-5');

// // titleEl.style.border = "rgb(122, 242, 242) 3px solid";
// titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// // rootEl.appendChild(titleEl);
// rootEl.append(titleEl);

// // titleEl.append("Welcome to jQuery");
// rootEl.append('<h2>With jQuery we can:</h2>');

// var abilities = [
//   'Select',
//   'Create',
//   'Style',
//   'Animate',
//   'Traverse',
//   'Event Listen',
//   'much more',
// ];

// for (var i = 0; i < abilities.length; i++) {
//   // Create a new `<div>` for each ability and its text content
//   var abilityEl = $('<li>');

//   // abilityEl.textContent = abilities[i];
//   abilityEl.text(abilities[i]);

//   // `my-3` class adds margin on top and bottom
//   abilityEl.addClass('my-3');

//   // Alternatively
//   // var abilityEl = $("<div>" + abilities[i] + "</div>");

//   // Add this new `<div>` to the abilities `<div>` container element.
//   rootEl.append(abilityEl);
// }

// // select all `<div>` elements on the page
// // document.querySelectorAll('div');
// console.log($('div'));

// // Alternatively use the `$.each` method
// // $.each(abilities, function(i, ability) {
// //    abilityEl.append("<div>" + ability + "</div>");
// // })
