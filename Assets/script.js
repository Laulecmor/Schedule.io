// Function and Variable to display date on screen 

$(document).ready(function () {
  var date = dayjs();
  $("#currentDay").text(date.format('MMM D, YYYY'));

  colorChange();

// Function to get the hour of the day 

  function colorChange() {
    var timeNow = dayjs().hour();

// Function that will change the color on the blocks based on whether the time is in the present, past, or future


    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      if (blockTime < timeNow) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });

// Loop that will save the data on the hour block 

    for (let hour = 9; hour <= 17; hour++) {
      $(`#hour${hour} .description`).val(localStorage.getItem(`hour${hour}`));
    }
  }

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
  });
});
