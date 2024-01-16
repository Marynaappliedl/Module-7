$(function(){
  var currentTime = dayjs();
  var hour= dayjs().hour();
  $(".BodyContainer").text(currentTime);
  $(".WeekDay").text(currentTime.format('dddd'));

  $('.time-block').each(function() {
      var blockTime = $(this).attr('id');
      if (blockTime==hour) {
          $(this).attr('class', 'row time-block present');
      //setColour(row,'red');
      } else if (blockTime < hour) {
          $(this).attr('class', 'row time-block past');
          //setColour(row,'white');
      } else {
          $(this).attr('class', 'row time-block future');
          //setColour(row,'green');
      }
  });
});
$('.description').each(function(){
  var hour = $(this).parent().attr('id'); 
  console.log(hour);
  console.log(localStorage.getItem(hour));
  $(this).val(localStorage.getItem(hour));
});
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  var hour = $(this).parent().attr('id');
  var todo = $(this).siblings('.description').val();
localStorage.setItem(hour,todo);


});
