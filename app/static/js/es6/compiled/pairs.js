(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/pair',
      type: 'POST',
      success: (function(response) {
        $('#result1').empty().append('<img src ="/img/' + response.dr1 + '.png" />');
        $('#result2').empty().append('<img src ="/img/' + response.dr2 + '.png" />');
        if (response.dr1 === response.dr2) {
          $('#result').empty().text('win');
        } else {
          $('#result').empty().text('lost');
        }
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pairs.map
