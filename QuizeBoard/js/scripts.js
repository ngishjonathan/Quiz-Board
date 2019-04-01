$(document).ready(function() {
$("form#add").submit(function(event) {
event.preventDefault();
var Q1 = $("input:radio[name=Q1]:checked").val();
var Q2 = $("input:radio[name=Q2]:checked").val();
var Q3 = $("input:radio[name=Q3]:checked").val();
var Q4 = $("input:radio[name=Q4]:checked").val();
var result = add(Q1, Q2, Q3, Q4);
$("#output").text(result);
});
});
