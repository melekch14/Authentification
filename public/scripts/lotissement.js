$(document).ready(function() {
    // Retrieve the token from local storage
    var token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login.html';
    }

    $('#save_lotissement').click(function() {
        
    });
  });