(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){ //e is event ie: the button being pressed
    var data = $('#sum').serialize(); //takes the info in form and puts in string

    $.ajax({
      url:'/sum', //where are you sending request
      type: 'POST', //what is the 'verb'
      data: data, //this is teh data you are sending
      success: response => {
        $('#result').text(response.sum);
      } //a function that will get called when the respnse comes back. can call the function whatever you want
    });

    e.preventDefault(); //prevents the default behavior of the form submitting itself
  }
})();
