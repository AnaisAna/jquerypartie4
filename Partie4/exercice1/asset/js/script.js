//Je déclare une fonction
$(function(){

//Je definie plusiseurs variables
  var table = ['Pierre','Feuille','Ciseaux'];//[..,..,..]Pour faire un tableau
  var victory = 0;// Le nombre de victoire qui commence à 0
  var defeat = 0; // Le nombre de defaite qui commence à 0
  var compteurH = 0; // Le compteur pour l'humain qui commence à 0
  var compteurC = 0; // Le compteur de l'ordinateur qui commence à 0
  var egality = 0; // L'égaliter pour l'ordinateur et le joueur qui commence à 0


  $('#play').click(function(){
  //Je définie deux variables le 1er pour le calcul et une autre variable pour prendre les valeurs dans ma select; random "element aleatoir"
    var random = Math.floor(Math.random() *3); //Ordinateur
    var result = $('#selection').val(); //Joueur
//si le joueur est égale à l'ordinateur
    if(result == random){
      //Alors c'est egaliter on incremente
      egality++;
      alert('EGALITE');
      //sinon si le joeur à ciseaux et l'ordinateur à pierre
    }else if(result == 2 && random == 0){
      //L'ordinateur gagne
      compteurC++;
      alert('La machine à choisit '+ table[random]+ '.Vous avez perdu !');
      //sinon si le joueur à pierre et l'ordinateur à ciseaux
    } else if(result == 0 && random == 2){
      //L'humain gagne
      compteurH++;
      alert('La machine à choisit '+ table[random]+ '.Vous avez gagné !');
    }
    //Sinon si le joueur à pierre et que l'ordinateur a feuille
    else if(result == 0 && random == 1){
      //L'ordinateur gagne
      compteurC++;
      alert('La machine à choisit' + table[random]+ '.Vous avez perdu !');
      //Sinon si le joueur à feuille et que l'ordinateur à pierre
    }else if(result == 1 && random == 0){
      //Le joueur gange
      compteurH++;
      alert('La machine à choisit ' + table[random]+ '.Vous avez gagné !');
      //Sinon si le joeur à feuille et l'ordinateur à ciseaux
    }else if(result == 1 > random == 2){
      //L'ordinateur gagne
      compteurC++;
      alert('La machine à choisit ' + table[random]+ '.Vous avez perdu !');
      //Sinon si e joueur à ciseaux et que l'ordinateur à feuille
    }else if(result == 2 < random ==1){
    //Alors le joueur gagne
      compteurH++;
      alert('La machine à choisit' + table[random]+ '.Vous avez gagné !');
    }
    //Nous voulons le nombre de victoire et le nombre de défaite
    alert('Le score de l\'ordinateur est ' + compteurC + ' Le score du joueur est ' + compteurH );
   //Nous voulons le pourcentage de victoire du joueur contre l'ordinateur
    alert('Votre pourcentage de victoire est de ' + (compteurH/(compteurH+compteurC+egality))*100);
  });
});


// deuxième solution plus simple
