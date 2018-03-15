function getPotions(){
    var xhttp = new XMLHttpRequest();
    var lista = document.getElementById('lista-produtos');

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var objPotions = JSON.parse(xhttp.response);

            for (var potion of objPotions){

                var id = potion.id;
                lista.innerHTML +=
                `<li class="col-md-4 col-xs-6">
                    <img src="assets/img/${potion.image}" alt="" class="img-responsive" onclick="lightboxStatus(false,${id})">
                    <p>
                        <span>${potion.name} - </span>
                        <span class="price">$${potion.price}</span>
                    </p>
                </li>`
            }
        }
    };
    xhttp.open("GET", "../assets/potions.json");
    xhttp.send();
}

getPotions();
