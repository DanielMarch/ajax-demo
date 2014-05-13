(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#draw').click(draw);
  }
  function draw(e) {
    $.ajax({
      url: '/poker',
      type: 'POST',
      success: (function(response) {
        var hand = [];
        hand.push(response.de1);
        hand.push(response.de2);
        hand.push(response.de3);
        hand.push(response.de4);
        hand.push(response.de5);
        $('#result1').empty().append('<img src ="/img/Cards/' + response.de1 + '.png" />');
        $('#result2').empty().append('<img src ="/img/Cards/' + response.de2 + '.png" />');
        $('#result3').empty().append('<img src ="/img/Cards/' + response.de3 + '.png" />');
        $('#result4').empty().append('<img src ="/img/Cards/' + response.de4 + '.png" />');
        $('#result5').empty().append('<img src ="/img/Cards/' + response.de5 + '.png" />');
        console.log(hand);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=poker.map
