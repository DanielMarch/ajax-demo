(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/dice',
      type: 'POST',
      success: (function(response) {
        $('#result').empty().append('<img src ="/img/' + response.dr + '.png" />');
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=dice.map
