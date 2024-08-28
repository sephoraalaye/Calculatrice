

var boutons = document.getElementsByTagName("button");

for (i=0; i<boutons.length;i++) {
        var id =  boutons[i].id;
        boutons[i].onclick = function(){
        document.getElementsByClassName('afficheur')[0].textContent = id;
        }

}
