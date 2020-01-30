let images = document.getElementById("images");
createImages();


function createImages() {

    for (var i = 0; i < 18; i++) {

        imageHolder = document.createElement("div");
        imageHolder.className = "imageHolder";
        imageHolder.id = "image-Holder" + i;
        images.appendChild(imageHolder);
        image = document.createElement("img");
        image.src = "../image7/Anime" + (i + 1) + ".jpg";
        image.id = (i + 1);
        imageHolder.appendChild(image);
    }
}


