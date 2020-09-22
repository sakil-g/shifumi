var nom, actionUser, ordinateur, signe_ordinateur, ordi,reset,led,led_ordi;
var score1 = 0;
var score2 = 0;
var round = 0;

//fonction pour comparer valeur du shifumi ordi et user
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
    //definir fonction de user 1
    actionUser = 1 ;
    //definir fonction ordinateur
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
    //attribuer fonction pour user
    actionUser = 2;
    //attribuer fonction pour ordi
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
    //atribuer fonction pour user
    actionUser = 3 ;
    //attribuer fonction pour ordi
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

//fonction pour comparer shifumi user et ordi 
function compare() {
    if (actionUser == ordinateur) {
        var led = document.getElementById("led-g"+(score1+1));
        //var led_ordi = document.getElementById("led-d"(score2+1));
        led.style.backgroundColor = "orange";
        //led_ordi.style.backgroundColor ="orange";
        score1 = score1 + 1 ;
        //score2 = score2 + 1 ;
        
    }
    //1 pierre , 2 feuille et 3 ciseaux
    // si je gagne
    if (ordinateur == 1 && actionUser == 2 || ordinateur == 3 && actionUser == 1 || ordinateur == 2 && actionUser == 3) {
        //var led = document.getElementById("led-g1");
        var led = document.getElementById("led-g"+(score1+1));
        var led_ordi = document.getElementById("led-d"+(score2+1));
        led.style.backgroundColor = "green";
        led_ordi.style.backgroundColor = "red";
        score1 = score1 + 1;
        console.log(score1, score2);
    }

    //1 pierre, 2 feuille et ciseaux
    // si l'ordi gagne
    if (ordinateur == 1 && actionUser == 3 || ordinateur == 3 && actionUser == 2 || ordinateur == 2 && actionUser == 1) {
        var led_ordi = document.getElementById("led-d"+(score2+1));
        var led = document.getElementById("led-g"+(score1+1));
        led_ordi.style.backgroundColor = "green";
        led.style.backgroundColor = "red";
        score2 = score2 + 1;
        console.log(score2, score1);
    }

    //si score = 3
    if (score1 == 3) {
        console.log("gagner");
        user = document.getElementById("user");
        user.style.backgroundImage = "url(youwin.jpg)";
        user.style.backgroundSize = "125%";
        user.style.backgroundPosition = "center";
        user.style.backgroundRepeat = "no-repeat";
        ordi = document.getElementById("ordi");
        ordi.style.backgroundImage = "url(youlose.png)";
        ordi.style.backgroundSize ="85%";
        ordi.style.backgroundPosition = "center";
        score1 = 0;
        score2 = 0;
    }
    // si score ordi = 3
    if (score2 == 3) {
        console.log ("perdu");
        ordi = document.getElementById("ordi");
        ordi.style.backgroundImage = "url(youwin.jpg)";
        ordi.style.backgroundSize ="125%";
        ordi.style.backgroundPosition = "center";
        user = document.getElementById("user");
        user.style.backgroundImage = "url(youlose.png)";
        user.style.backgroundSize = "85%";
        user.style.backgroundPosition = "center";
        user.style.backgroundRepeat = "no-repeat";
        score1 = 0; 
        score2 = 0;

    }
}









