var form = document.querySelector("form");

form.addEventListener("submit", function(e){

    var champ1=form.elements.champ1.value;
    var champ2=form.elements.champ2.value;
    var champ3=form.elements.champ3.value;
    var champ4=form.elements.champ4.value;
    var champ5=form.elements.champ5.value;

    var masqueBinaire="";
    var masqueDecimal="";
    var adresseReseau="";

    var tab=["0","0","0","0","0","0","0","0",
             "0","0","0","0","0","0","0","0",
             "0","0","0","0","0","0","0","0",
             "0","0","0","0","0","0","0","0"
            ];

    var tab8bits=[128,64,32,16,8,4,2,1,
                  128,64,32,16,8,4,2,1,
                  128,64,32,16,8,4,2,1,
                  128,64,32,16,8,4,2,1,
                 ];


    //***************************************************************************************************
    //Champ5 binaire :
    //on rempli tab avec des "1" en fonction du nombre rentré dans champ5
    for(var i=0;i<champ5;i++){
        tab[i]="1";
    }

    //on parcour tab pour remplir la variable masqueBinaire et ajouter des points
    for (var i=0;i<tab.length;i++){
        if((i===8) || (i===16) || (i===24)){
            masqueBinaire += ".";
            //console.log(e);
        }
        masqueBinaire += tab[i];
    }

    //insertion de masqueBinaire dans le HTML
    document.getElementById("masqueBinaire").textContent="Masque binaire : "+masqueBinaire;

    //****************************************************************************************************
    // Champ5 Décimal
    var compteurValeurDecimal=0;

    for (var i=0;i<=tab.length;i++){
        if((i===8) || (i===16) || (i===24) || (i===32)){
            masqueDecimal += compteurValeurDecimal;
            if(i!=32){masqueDecimal += ".";}//pour ne pas mettre un . à la fin :)
            compteurValeurDecimal=0;

        }
        compteurValeurDecimal += tab[i]*tab8bits[i];
        console.log("compteurValeurDecimal = "+compteurValeurDecimal);
        console.log("masqueDecimal = "+masqueDecimal);
    }

    document.getElementById("masqueDecimal").textContent="Masque décimal : "+masqueDecimal;

    //****************************************************************************************************
    //Adresse Réseau

    var tabReseau=[128,64,32,16,8,4,2,1];

    function addReseau(champ){

        for(var i=0;i<8;i++){
            if(champ>=tabReseau[i]){
                champ -=tabReseau[i];
                adresseReseau += "1";
            }else(adresseReseau += "0");
        }
        adresseReseau+=".";

    }

    addReseau(champ1);
    addReseau(champ2);
    addReseau(champ3);
    addReseau(champ4);
    document.getElementById("adresseReseau").textContent="Adresse Réseau : "+adresseReseau;


    e.preventDefault()
});

