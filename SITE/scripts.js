var tamagotchi = document.querySelector('#tamagotchi'); 
var action = document.querySelectorAll('.action');
const base = document.querySelector('.base');

for(var i = 0; i < action.length; i++)
{
  action[i].addEventListener('dragstart', function(event) {
  this.className = 'actionChoisie';
  event.dataTransfer.effectAllowed = 'copy';
  event.dataTransfer.setData('text', this.id);
  return false;
  }, false);
}
 
// On obtient la liste des objets HTML des produits avec la méthode querySelectorAll. C'est un choix parmi d'autre. Puis on ajoute à chaque balise représentant un produit la propriété draggable, à titre de démonstration (cela fonctionne sans, car on déplace des images). Ensuite à chaque balise on associe un évènement dragstart et une fonction qui répond à cet évènement.
// Dans notre exemple, quand on initie un déplacement dans la page, l'image du produit prend une bordure rouge.
// Le contenu à transférer est définit par dataTransfer.setData. On lui donne le type text et l'id de la balise représentant un produit.

tamagotchi.addEventListener('dragover', function(event) {
   if (event.preventDefault) event.preventDefault();
   event.dataTransfer.dropEffect = 'copy';
   return false;
}, false); 
    
tamagotchi.addEventListener('dragenter', function(event) {
    return false;
}, false);
 
tamagotchi.addEventListener('dragleave', function(event) {
   return false;
}, false);
 
//On associe l'évènement dragEnter et dragLeave à la balise dans laquelle on veut déposer les objets. Dans notre exemple, aucun traitement n'est ajouté.
//On associe aussi dragOver. C'est l'occasion d'assigner un effet. 

tamagotchi.addEventListener('drop', function(event) {
	event.preventDefault(); // pour Firefox
  var id = event.dataTransfer.getData('text');
  var objetCopie = document.getElementById(id); 
  //objetCopie.parentNode.removeChild(objetCopie);   // une option non retenue ici
  objetCopie.className='objetCopie';
  var clone  = document.createElement('img');
  clone.src = objetCopie.src;
  clone.classList.add("cloneTransparent");
   //tamagotchi.appendChild(clone); crée le clone de limage.
  
  
});

base.addEventListener('drop' , function(event){
				
        //ligne rajouter pour modifier la valeur de la barre d'event
        bar.value += 25;



		if (base.classList.contains('nerd')) {
			base.classList.remove('nerd');
			base.classList.add('base');
		} else {
			base.classList.add('nerd');
			base.classList.remove('base');
		}
});

//C'est la fonction la plus complexe (dans notre exemple) et la plus importante et donc, elle mérite d'être 
//		explicitée en détails.

//    
//    On récupère le contenu de dataTransfer, en l'occurence l'id du produit.
//    Cela permet de placer l'élément HTML correspondant dans la variable objetCopie.
//    On peut à ce stade supprimer l'objet dans la boutique avec la méthode DOM removeChild. Cela conviendrait 
//		à certains traitements où il s'agit de déplacer des objets dans la page, mais pas à notre exemple, 
// 		donc j'ai ajouté cette instruction pour mémoire en commentaire.
//    Pour insérer l'image dans le panier, on crée une balise image, on assigne comme source celle de l'objet 
//		déplacé, et on ajoute cette balise comme descendant du conteneur cartArea.
//    On annule l'exécution des évènements par défaut avec preventDefault. C'est necéssaire pour Firefox.

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

var bar = document.querySelector('.bar');
// const ajout = document.querySelector('.ajout');
const bonheur = document.querySelector('.bonheur');
// const insat = document.querySelector('.insat');
const affichageEvent = document.querySelector('.affichageEvent');
let heureux = true;


//gestion de la bar de bonheur 

//lancement de l'intervalle de changement d'etat.



//gestion du bouton d'ajout
// ajout.addEventListener('click',function(){
//   bar.value += 10;
//   console.log(bar.value);
// });

//gestion de la durée de la partie
//on commence par demander a l'user de saisir la durée souhaité
// let duree = null;
// while(duree )
const play = document.querySelector('.play');
play.addEventListener("click", function (){
  do{
  duree = prompt('veuiller saisir la durée de votre partie (en secondes):');
  }while(typeof duree == 'number' || duree <=0);
  

var event = setInterval(function(){
  console.log('debut');
  heureux = false;
  affichageEvent.innerHTML = 'Event en cours';

  
  //declaration intervalle de gestion bar de bonheur.
  var i = setInterval(function(){
    if (heureux == false)
    bonheur.value -= 1; 

  //condition de sorti de l'interval et remise a zero de la barre d'event ainsi que gain de bonheur
    if(bar.value == 100){
      bar.value = 0;
      bonheur.value += 25;
      //recompense a 25 car le proc de l'intervalle ce fais donc 25-5 = 20
      clearInterval(i);
      heureux =true;
      console.log('event validé');
      clearTimeout(finEvent);
      affichageEvent.innerHTML = 'pas d\'event';

    }

    
  }, 1000);

  //sorti de l'event si pas validé dans le temps accordé
  var finEvent = setTimeout(function(){
    clearInterval(i);
    bonheur.value -= 15;
    console.log('fin');
    affichageEvent.innerHTML = 'pas d\'event en cours';
  },9000);

},15000);

  


//puis on converti la duree en miliseconds
  duree = duree*1000;



//enfin on lance le timeout qui durera le temps souhaité
var to = setTimeout(function(){
  clearInterval(event);
  clearInterval(i);

  
  if(bonheur.value > 90){
    clearTimeout(finEvent);
    alert('vous avez gagné');
  }else{
    clearTimeout(finEvent);
    alert('vous avez perdu');
  }

  bonheur.value = 100;

}, duree);


const affichageTemps = document.querySelector('.affichageTemps');
let tempsEcoule = 0;

let t = setInterval(function(){
  tempsEcoule += 1000;
  let tempsRestant = duree - tempsEcoule;
  sec.innerHTML = tempsRestant/1000;
  if(tempsEcoule == duree){
    clearInterval(t);
  }
  console.log(duree);
},1000);


});
