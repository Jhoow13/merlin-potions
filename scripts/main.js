function getPotions(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var objPotions = JSON.parse(xhttp.response);


            for (var potion in objPotions.potions){
                var itemPotion = objPotions.potions[potion];

            }
        }
    };
    xhttp.open("GET", "../assets/potions.json");
    xhttp.send();
}

getPotions();