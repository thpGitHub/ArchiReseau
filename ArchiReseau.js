var form = document.querySelector("form");

form.addEventListener("submit", function(e){

    var champ1=form.elements.champ1.value;
    console.log(champ1);

    var champ5=form.elements.champ5.value;
    console.log(champ5);

    var masqueBinaire="";
    var masqueDecimal="";

    for(var i=0;i<champ5;i++){
        if((i===8) || (i===16) || (i===24)){
            masqueBinaire += ".";
        }
        masqueBinaire += "1";

    }
    console.log("masqueBinaire : "+masqueBinaire);

    document.getElementById("masqueBinaire").textContent="Masque binaire : "+masqueBinaire;

/* if chiffre >8
        sinon chiffre boucle for qui parcour tableau 128,64,36...
        if chiffre >16
            sinon chiffre boucle for qui parcour tableau 128,64,36...
                if chiffre >24
                    sinon chiffre boucle for qui parcour tableau 128,64,36...
 */

e.preventDefault()
});