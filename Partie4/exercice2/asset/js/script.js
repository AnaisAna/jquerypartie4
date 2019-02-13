$(function(){
  $('#valider').click(function(){
    var note1 = parseFloat($('#note1').val());
    var note2 = parseFloat($('#note2').val());
    var note3 = parseFloat($('#note3').val());
    var note4 = parseFloat($('#note4').val());
    var note5 = parseFloat($('#note5').val());
    var moyenne = (note1 + note2 + note3 + note4 + note5)/5;

    if(moyenne >= 0 && moyenne < 10){
      alert('En dessous de la moyennne.' + moyenne);
    }else if(moyenne >= 10 && moyenne < 13){
      alert('Moyen.' + moyenne);
    }else if(moyenne >= 13 && moyenne < 16){
      alert('Bien.' + moyenne);
    }else if(moyenne >= 16 && moyenne < 20){
      alert('Très bien.' + moyenne);
    }else if(moyenne == 20){
      alert('Excellent !' + moyenne);
    }
  });
});
