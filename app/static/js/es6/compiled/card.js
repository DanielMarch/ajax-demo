(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#draw').click(draw);
  }
  function draw(e) {
    $.ajax({
      url: '/card',
      type: 'POST',
      success: (function(response) {
        $('#result').empty().append('<img src ="/img/Cards/' + response.dr + '.png" />');
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=card.map
