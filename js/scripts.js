$(document).ready(function() {
  $("#sub").click(function(event) {
    var shortform=parseInt($("input:radio[name=Q1]:checked").val());
    console.log(shortform);

    var java=parseInt($("input:radio[name=Q2]:checked").val());
    console.log(java);

    var language=parseInt($("input:radio[name=Q3]:checked").val());
    console.log(language);

    var mwas=parseInt($("input:radio[name=Q4]:checked").val());
    console.log(mwas);

    var display=parseInt( shortform + java + language + mwas )
    console.log(display);

    //var name=$("input#firstName").val();
    //event.preventDefault();
    $("#hide").slideDown();
    $("#results").html("your score is: " + display + "%");
  });
});
