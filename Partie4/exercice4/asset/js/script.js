
$(function() {

  $('#genere').click(function() {

    var alphgex = /[A-Za-z-]/;
    var numbergex = /^(([0-2]{1}[\d]{1})|([3]{1}[0-1]{1}))\/(([0]{1}[\d]{1})|([1]{1}[0-2]{1}))\/([0-9]{4})$/;
    var name = $('#name').val();
    var firstName = $('#firstName').val();
    var birthDate =$('#birthDate').val();
    var placeOfBith = $('#placeOfBith').val();
    var job = $('#job').val();
    var society = $('#society').val();

    if (alphgex.Match(name, firstName, placeOfBith, job, society) && birthDate.Match(numbergex)){
      alert( name + firstName + ' née le ' + birthDate + 'à' + placeOfBith + 'actuellement' + job + 'à' + society);
    }else{
      alert('Vérifier il y a une ou plusieurs erreurs');
    }
  });
});
