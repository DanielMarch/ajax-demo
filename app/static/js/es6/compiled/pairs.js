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
        if (response.dr1 === 1 && response.dr2 === 1) {
          $('#result').text('win');
        } else if (response.dr1 === 2 && response.dr2 === 2) {
          $('#result').text('win');
        } else if (response.dr1 === 3 && response.dr2 === 3) {
          $('#result').text('win');
        } else if (response.dr1 === 4 && response.dr2 === 4) {
          $('#result').text('win');
        } else if (response.dr1 === 5 && response.dr2 === 5) {
          $('#result').text('win');
        } else if (response.dr1 === 6 && response.dr2 === 6) {
          $('#result').text('win');
        } else {
          $('#result').text('lost');
        }
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pairs.map
