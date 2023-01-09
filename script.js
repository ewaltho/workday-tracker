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
  
  var saved = [];
  $('.saveBtn').on('click', function(){
    
    for (var i = 0; i < 9 ;i++) {
      var savedText = $('#container').children().eq(i).children().eq(1).val();
      
      saved.push(savedText);
      localStorage.setItem('saved',JSON.stringify(saved));
    }
    
    
  })
  
  
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  
  
  $(function (){
    var currentTime = dayjs().hour();
    $('.time-block').each(function(){
      var hourEl = $(this).attr('id').split('-')[1]
      if (currentTime == hourEl) {
        $(this).addClass('present')
      } else if (currentTime > hourEl) {
        $(this).addClass('past');
      } else if (currentTime < hourEl) {
        $(this).addClass('future');
      } 
    });
  });
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  var recallInfo = JSON.parse(localStorage.getItem('saved'));
  $('#hour-9').children().eq(1).text(recallInfo[0]);
  $('#hour-10').children().eq(1).text(recallInfo[1]);
  $('#hour-11').children().eq(1).text(recallInfo[2]);
  $('#hour-12').children().eq(1).text(recallInfo[3]);
  $('#hour-13').children().eq(1).text(recallInfo[4]);
  $('#hour-14').children().eq(1).text(recallInfo[5]);
  $('#hour-15').children().eq(1).text(recallInfo[6]);
  $('#hour-16').children().eq(1).text(recallInfo[7]);
  $('#hour-17').children().eq(1).text(recallInfo[8]);

  //'saved' index key:
  //id=hour-9 --- [0]
  //id=hour-10 --- [1]
  //id=hour-11 --- [2]
  //id=hour-12 --- [3]  
  //id=hour-13 --- [4]
  //id=hour-14 --- [5]  
  //id=hour-15 --- [6]
  //id=hour-16 --- [7]    
  //id=hour-17 --- [8] 

  // TODO: Add code to display the current date in the header of the page.
  var date = dayjs();
  $('#currentDay').text(date);
});
