let cards = document.getElementById("card");
createImages();

function createImages() {

    for (var i = 0; i < 16; i++) {

        imageHolder = document.createElement("div");
        imageHolder.className = "imageHolder";
        imageHolder.id = "image-Holder" + i;
        cards.appendChild(imageHolder);
        image = document.createElement("img");
        image.src = "../image7/Anime" + (i + 1) + ".jpg";
        image.id = (i+1);
        imageHolder.appendChild(image);

    }
}

function shuffleCards() {

    random = Math.floor(Math.random() * imageHolder.id);
    console.log();

}

function click () {

    for (var i = 0; i <shuffleCards(); i++) {

        if (imageHolder[i] ==2) {
            image.src = "../image6/Anime"
        }
    }

}


