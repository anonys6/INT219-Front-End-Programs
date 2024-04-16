const containerBox = document.getElementById("container-image");
const mainImage = document.getElementById("main-image");

containerBox.addEventListener("click", function (e) {
    console.log(e.target);

    let temp = e.target.src;
    console.log(temp);

    mainImage.src = temp;

})