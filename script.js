$(function () {

  // this to show current day at header
  var currentDay = $('#currentDay');
  currentDay.text( dayjs().format('dddd, DD MMM YYYY'));
  
  
  // for color coded, to control colors of i of hour-i comparing with current hour
  var currentHour = dayjs().get('hour');
  // console.log(currentHour);
  
  $(document).ready(function() {
    for (var i = 9; i < 25; i++) {
      if ( currentHour < i ) {
        $("#hour-"+i).addClass('future');
      } else if ( currentHour === i ) {
        $("#hour-"+i).addClass('present');
      } else {
        $("#hour-"+i).addClass('past');
      }
    
    if (localStorage.getItem("#hour-"+i)) {
      // $("#hour-"+i).text(localStorage.getItem("#hour-"+i))
      $("#hour-"+i).children(1).text(localStorage.getItem("#hour-"+i));
    }
    }
  });
  
  // saving user events in local storage
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', function() {
    var scheduledEvent = $(this).parent().attr("id");
    var description = document.querySelector('#' + scheduledEvent + ' textarea').value;
    var hourEvent = window.localStorage.setItem(scheduledEvent, description);
    console.log( scheduledEvent + " : " + window.localStorage.getItem(scheduledEvent));

  });
  // event.preventDefault();
  

  for (var i = 9; i < 25; i++) {
    // console.log($("#hour-"+i + ' .description'));
    $("#hour-"+i + ' .description').val(localStorage.getItem("hour-"+i));
    };

});
