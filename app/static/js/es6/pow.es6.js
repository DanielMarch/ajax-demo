(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#pow').click(pow);
  }

  function pow(e){ //e is event ie: the button being pressed
    var data = $('#power').serialize(); //takes the info in form and puts in string

    $.ajax({
      url:'/pow', //where are you sending request
      type: 'POST', //what is the 'verb'
      data: data, //this is the data you are sending
      success: response => {
        $('#result').text(response.pow);
      } //a function that will get called when the respnse comes back. can call the function whatever you want
    });

    e.preventDefault(); //prevents the default behavior of the form submitting itself
  }
})();
