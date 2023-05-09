$( "#notes-rest" ).click(function () { 
  let cell = $("<div class='notes-cell'></div>");
  
  let text = $("<div class='notes-text outline-blue'>------------------------</div>")
  let check = $("<div class='notes-check outline'>X</div>");


  $(".notes-body").append(cell);
  


  $(cell).append(text);
  $(cell).append(check);

  $(check).click(function () { 
    $(cell).remove();
  });

  // remove previous keyup event listener
  $(document).off('keyup.notes');
  
  // add keyup event listener with a namespace 'notes' to identify it
  $(document).on('keyup.notes', function (e) {
    if (e.which == 8) {
      let lastCell = $(".notes-body").children().last();
      let lastText = $(lastCell).find(".notes-text");
      let currentText = $(lastText).text();
      $(lastText).text(currentText.substring(0, currentText.length - 1));
    } else {
      let inp = String.fromCharCode(e.which);
      let lastCell = $(".notes-body").children().last();
      let lastText = $(lastCell).find(".notes-text");
      let currentText = $(lastText).text();
      $(lastText).text(currentText + inp);
    }
  });
});
