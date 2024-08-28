
var ecran = document.getElementsByClassName("afficheur")[0];
var a = 0,b = 0,c = 0,resultat = 0,op = "";

function continuer(){
    a = resultat;
}




function saveValue(bouton){
    a += bouton.id;
    ecran.textContent += bouton.id;
    
}

function saveOperation(operation){
    ecran.textContent += operation.id;
    b= parseInt(a);
    op = operation.id;
    a=""; 
}

function egal(){
    c= parseInt(a);
    switch(op) {
        case "+" : 
            resultat = b + c;
            break;
        case "-" : 
            resultat = b - c;
            break;
        case "x" : 
            resultat = b * c;
            break;
        case "/" : 
            if(c!= 0){resultat = b / c; }
            else{ alert("Une division par 0 n'est pas possible");}
            break;
        default:
            alert("Erreur");
    }
    ecran.textContent = resultat; 
    
}

function effacerEcran(){
    ecran.textContent = "";
}


