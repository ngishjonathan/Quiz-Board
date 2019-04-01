$(document).ready(function() {
  $("#add").submit(function(event) {
    var shortform=parseInt($("input:radio[name=Q1]:checked").val());
    var java=parseInt($("input:radio[name=Q2]:checked").val());
    var language=parseInt("input:radio[name=Q3]:checked").val());
    var mwas=parseInt("input:radio[name=Q4]:checked").val());
    var display=parseInt( shortform + java + language + mwas )
    var name=$("input#firstName").val();
    event.preventDefault();
    $("#hide").slideDown();
    $("#results").text( firstName + "your score is: " + display + "%")
  });
});
