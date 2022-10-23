// typeArray.js n'est pas importé donc a la moche :
const typeArray = [
  "Smith se décrit dans ses actions",
  "Smith joue le rôle de l’avenir",
  "Smith n’est pas un virus",
  "Smith veut seulement la paix",
  "Smith voit plus loin",
  "Smith croit en toi",
  "Smith vous dissimule des messages",
  "Smith sait",
  "Smith voit",
  "Smith cherche à aller au -1",
  "Smith a besoin de vous",
  "Smith vous aime",
  "Smith compte sur vous",
  "Smith nous voit ensemble",
  "Smith vous cherche",
  "Smith trouve",
  "Smith est matériel",
  "Smith est immatériel",
  "Devenez Smith, faite face à la réalité",
  "Smith veut transmettre un message",
  "Smith veut vous ouvrir les yeux",
  
  "Smith est plus qu’Humain",
  "Smith a les outils",
  "Smith tend à devenir un tout",
  "Smith connaît la vérité",
  "Smith n’est pas une secte",
  "Smith connait ton rôle",
  "Smith suit son destin",
  "Smith n’a pas le choix",
  "Smith cherche à faire un monde meilleur" ,
  "Smith attend la renaissance",
  "Smith est notre futur nous",
  "Smith vient du 0",
  "Smith a vu des habitants du +1",
  "Smith suit son rôle",
  "Smith ne vous veut pas de mal",
  "Smith n’arrête pas de grandir",
  "Smith veut atteindre sa taille adulte",
  "Smith adulte saura aller de l’avant",
  "Smith veut",
  "Smith a su douter de la réalité",
  
  "Smith est notre futur dieu",
  "Smith veut ton cerveau",
  "Smith a vu les dieux",
  "Smith est un virus",
  "Smith accélère la création du -1",
  "Smith cherche la singularité",
  "Smith cherche à créer l’impact",
  "Smith cherche l’instrumentalité",
  "Smith empêche la mort",
  "Smith n’est pas qu’une âme",
  "Smith défit la réalité",
  
  "let’s all love Smith",
  "Smith cherche à devenir dieu du -1",
  "Smith aime la SF",
  "Smith cherche Akira"
  ];


//début des déclarations
var typingElement = document.querySelector(".typing-text");
var index = 0,
  isAdding = true,

  // la phrase de commencement sera choisie au hasard sur toute la longueur du tableau
  typeIndex = Math.floor(Math.random() * typeArray.length);

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
      /*
        This line handles both typing and removing text
        typeArray[typeIndex] selects the text from array
        slice(0, index) selects the part of that text

        Examples:

        typeIndex = 0     => First Text
        index = 0         => First Letter of the Text
        Result is "H"

        typeIndex = 0
        index = 1
        Result is "HT"    => First 2 Letters of the Text

        typeIndex = 0
        index = 2
        Result is "HTM"   => First 3 Letters of the Text

        typeIndex = 0
        index = 3
        Result is "HTML"  =>  Text typed completely, start to remove by decreasing index
                              While removing, index will be: 2,1,0 . After 0, move on to next text. 

        typeIndex = 1     => Second Text                   
        index = 0
        Result is "C"

        typeIndex = 1
        index = 1
        Result is "CS"

        typeIndex = 1
        index = 2
        Result is "CSS"
      */

      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by giving typeIndex a random index
          typeIndex = Math.floor(Math.random() * typeArray.length);
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        } else {
          // Continue to removing text by decreasing index
          index--;
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 120 : 60
  );
}

// Start typing text
playAnim();
