$( document ).ready(function () {

  $('#loading-bar').hide();
  

  $('#btn4').click(function () { 
    $('#tabelle1').toggle();

    if ($('#btn4').text() == "Tabelle verstecken") {
      $('#btn4').html("Tabelle anzeigen");
    } else {
      $('#btn4').html("Tabelle verstecken");
    }
    
    
  });


  $('#btn5').click(function () { 

    $('#tabelle1 th').animate({
      "font-size": "+=4"
    }, 0);

    $('#tabelle1 td').animate({
      "font-size": "+=4"
    }, 0);
    
  });

  $('#btn6').click(function () { 
    $('#tabelle1 th').animate({
      "font-size": "-=4"
    }, 0);

    $('#tabelle1 td').animate({
      "font-size": "-=4"
    }, 0, );

  });


  $('#btn7').click(function () { 

    $('#loading-bar').show();
    $('#btn7').hide();

    $('#loading-bar').animate({
      "width": "200px"
    }, 3000, "swing", function() {
      $('#loading-bar').hide();

    })


    
  });
})