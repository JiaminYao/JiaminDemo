var addLikeButton = document.getElementById('like');
var number = document.getElementById('number').textContent;
var changeNameButton = document.getElementById('changeName');
var changeColorButton = document.getElementById('changeColor');
var h1 = document.getElementById('myName');


changeNameButton.addEventListener('click', function() {
    number = 0;
    document.getElementById('number').textContent = number;
    if (h1.textContent === "Yaoyao") {
        h1.textContent = "Jiangjiang";
    } else {
        h1.textContent = "Yaoyao";
    }
});

addLikeButton.addEventListener('click', function() {
    number++;
    document.getElementById('number').textContent = number;
});


changeColorButton.addEventListener('click', function() {
    if (h1.style.color === "black") {
        h1.style.color = "red";
    } else {
        h1.style.color = "black";
    }
});

