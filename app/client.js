'use strict';

$(function() {

  $('#input-quote').on('submit', function(event) {
    event.preventDefault();
    if ($('#user-quote').val() !== '') {
      var userQuote = $('#user-quote').val();
      $.post('/quote', {quote: userQuote}, function(res) {
        var confirm = response.message + ' <em>' + res.confirm + '</em>';
        $('#quote-add-response').html(confirm);
      });

      $('#user-quote').val('');
    }
  });

});
