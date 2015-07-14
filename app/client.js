'use strict';

$(function() {

  $('#input-word').on('submit', function(event) {
    event.preventDefault();
    if ($('#user-word').val() !== '') {
      var userWord = $('#user-word').val();
      $.post('/word', {word: userWord}, function(res) {
        var confirm = response.message + ' <em>' + res.confirm + '</em>';
        $('#word-add-response').html(confirm);
      });

      $('#user-word').val('');
    }
  });

});
