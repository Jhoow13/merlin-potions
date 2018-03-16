var lightbox = document.querySelector('.lightbox');
var conteudo = document.querySelector('.lightbox-content');

function getPotionInfo(id){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var objPotions = JSON.parse(xhttp.response);

            var itemPotion = objPotions.find(function(item){
                return item.id == id
            })

            var ingredients = itemPotion.ingredients.map(function(item){
                return `<li>${item}</li>`
            });

            conteudo.innerHTML = `
            <div class="row">
              <span class="close" onclick="lightboxStatus(true)">x</span>
              <div class="col-md-6">
                <img src="assets/img/${itemPotion.image}" alt="" class="img-responsive">
              </div>
              <div class="col-md-6">
                <h1>${itemPotion.name}</h1>
                <h2>Use/Effect:</h2>
                <p>${itemPotion.effect}</p>
                <h2>Ingredients:</h2>
                <ul>${ingredients.join("")}</ul>
                <h2>Price</h2>
                <p class="price">$${itemPotion.price}</p>
                <button class="btn btn-default">add to cart</button>
              </div>
            </div>
            `
        }
    };
    xhttp.open("GET", "../assets/potions.json");
    xhttp.send();
}

function lightboxStatus(isOpen,id){
    if(!isOpen){
        getPotionInfo(id);
        lightbox.style.display = "block";
        document.body.style.overflow = "hidden";

    }else{
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

document.addEventListener('keyup', function(e){
    if(e.keyCode == '27'){
        lightboxStatus(true);
    };
})

window.onclick = function(event){
    if(event.target == lightbox){
        lightboxStatus(true);
    }
}
