(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#sumlist').click(sumlist);
  }
  function sumlist(e) {
    var list = $('#sum').val().split(',').map(function(x) {
      return parseInt(x);
    });
    console.log(list);
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: {list: list},
      success: (function(response) {
        $('#result').text(response.suml);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
