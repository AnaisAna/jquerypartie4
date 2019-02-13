
$(function() {

      $('#valider').click(function() {
          var emailreg = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-0-9]+\.[a-zA-Z]{2,4}$/;
          var telreg = /^[0]{1}[1-9]{1}[\d]{8}$/;
          var namereg = /[A-Za-z-]/;

          var nom = $('#name').val();
          var prenom = $('#firstname').val();
          var mail = $('#mail').val();
          var phone = $('#phone').val();

          if (nom.match(namereg) && prenom.match(namereg) && phone.match(telreg) && mail.match(emailreg)) {
            alert('Bravo tu as reussi');
      }else {
        alert('Pense à te relire j\'attends un nom et prénom corrects, une adresse email valide et un numéro de téléphone à 10 chiffres');
      }
    });
 });
