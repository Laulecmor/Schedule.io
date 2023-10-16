$(document).ready(function () {
  var date = dayjs();
  $("#currentDay").text(date.format('MMM D, YYYY'));

  colorChange();

  function colorChange() {
    var timeNow = dayjs().hour();

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
