(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#pow').click(pow);
  }
  function pow(e) {
    var data = $('#power').serialize();
    $.ajax({
      url: '/pow',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.pow);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pow.map
