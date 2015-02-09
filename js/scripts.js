var queenAttack = function(coordinate1, coordinate2) {
  if ((coordinate1[1] === coordinate2[1]) || (coordinate1[0] === coordinate2[0])) {
    return true;
  } else if (Math.abs(coordinate1[0] - coordinate2[0]) === Math.abs(coordinate1[1] - coordinate2[1])) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var coordinate1 = $("input#coordinate1").val().split(',');
    var coordinate2 = $("input#coordinate2").val().split(',');
    var result = queenAttack(coordinate1, coordinate2);

    if (result) {
      $("#true").show() && ("#false").hide();
    } else {
      $("#false").show() && ("#true").hide();
      }

    event.preventDefault();

  });
});
