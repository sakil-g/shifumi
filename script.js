var nom, actionUser, ordinateur, signe_ordinateur, ordi;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function champ() {
    //afficher champ de saisie
    var nom = window.prompt('veuillez saisir votre nom svp ');
    //cibler id pour changer le user i.d
    document.getElementById("nom-champ").innerHTML = nom ;
   
}


function shifumi_pierre() {
    //cibler id que l'on affecte dans la variable USER
    var user = document.getElementById("user");
    //changement de background CSS
    user.style.backgroundImage = "url(mountain-rock-oJVXoX5-600.jpg)";
    user.style.backgroundSize = "100%";
    user.style.backgroundPosition = "1px -30px";
    actionUser = 1 ;
    ordinateur = mathRandomInt(1, 3); 
    if (ordinateur == 1) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(mountain-rock-oJVXoX5-600.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -30px"; 
    }
    else if (ordinateur == 2) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(feuille.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -41px";
    }
    else if (ordinateur == 3) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(scissors.jpg)";
        ordi.style.backgroundSize = "67%";
        ordi.style.backgroundPosition = "63px -4px";
        ordi.style.backgroundRepeat = "no-repeat";
    }

     compare();
    
}

function shifumi_feuille() {
    var user = document.getElementById("user");
    //changement de background CSS
    user.style.backgroundImage = "url(feuille.jpg)";
    user.style.backgroundSize = "99%";
    user.style.backgroundPosition = "0px -41px";
    actionUser = 2;
    ordinateur = mathRandomInt(1, 3); 
    if (ordinateur == 1) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(mountain-rock-oJVXoX5-600.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -30px"; 
    }
    else if (ordinateur == 2) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(feuille.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -41px";
    }
    else if (ordinateur == 3) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(scissors.jpg)";
        ordi.style.backgroundSize = "67%";
        ordi.style.backgroundPosition = "63px -4px";
        ordi.style.backgroundRepeat = "no-repeat";
    }

     compare();
}

function shifumi_ciseaux() {
    var user = document.getElementById("user");
    //changement de background CSS
    user.style.backgroundImage = "url(scissors.jpg)";
    user.style.backgroundSize ="67%";
    user.style.backgroundRepeat="no-repeat";
    user.style.backgroundPosition= "65px 0px";
    actionUser = 3 ;
    ordinateur = mathRandomInt(1, 3); 
    if (ordinateur == 1) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(mountain-rock-oJVXoX5-600.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -30px"; 
    }
    else if (ordinateur == 2) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(feuille.jpg)";
        ordi.style.backgroundSize = "100%";
        ordi.style.backgroundPosition = "1px -41px";
    }
    else if (ordinateur == 3) {
        ordi = document.getElementById("ordi")
        ordi.style.backgroundImage = "url(scissors.jpg)";
        ordi.style.backgroundSize = "67%";
        ordi.style.backgroundPosition = "63px -4px";
        ordi.style.backgroundRepeat = "no-repeat"
    }
    compare();
}

function compare() {
    if (actionUser == ordinateur) {
        var user = document.getElementById("orange");
        var ordi = document.getElementById("orange2");
        user.style.backgroundColor = "orange";
        ordi.style.backgroundColor ="orange";
        
    }
    else if (signe_ordinateur == 1 && nom == 3 || signe_ordinateur == 3 && nom == 2 || signe_ordinateur == 2 && nom == 1) {
    var user = document.getElementById("green2");
    user.style.backgroundColor = "green";

    }

    else if (signe_ordinateur == 1 && nom == 2 || signe_ordinateur == 3 && nom == 1 || signe_ordinateur == 2 && nom == 3) {
    var user = document.getElementById("green");
    user.style.backgroundColor = "green"
    }
}







