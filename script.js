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
  

  // for (var i = 9; i < 25; i++) {
  //   $("#hour-"+i .description).val(localStorage.getItem("#hour-"+i));
  //   };

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  $('#hour-24 .description').val(localStorage.getItem('hour-24'));

});

