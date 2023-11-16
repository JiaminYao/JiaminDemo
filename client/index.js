var addLikeButton = document.getElementById('like');
var numberP = document.getElementById('number');
var changeNameButton = document.getElementById('changeName');
var changeColorButton = document.getElementById('changeColor');
var clearButton = document.getElementById('clear');
var h1 = document.getElementById('myName');

var yaoyaoNumber = 0;
var jiangjiangNumber = 0;

fetch(`http://localhost:3000/yao`, { method: 'GET' })
.then(response => response.json())
.then(data => {            
    yaoyaoNumber = data.numberYao;
});   

fetch(`http://localhost:3000/jiang`, { method: 'GET' })
.then(response => response.json())
.then(data => {            
    jiangjiangNumber = data.numberJiang;
});   

if(h1.textContent === "Yaoyao") {
    numberP.textContent = yaoyaoNumber;
} else {
    numberP.textContent = jiangjiangNumber;
}

addLikeButton.addEventListener('click', function() {
    if (h1.textContent === "Yaoyao") {
        fetch(`http://localhost:3000/yao-increment`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {            
            yaoyaoNumber = data.numberYao;
            numberP.textContent = yaoyaoNumber;
        });       
    } else {
        fetch(`http://localhost:3000/jiang-increment`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {            
            jiangjiangNumber = data.numberJiang;
            numberP.textContent = jiangjiangNumber;
        }); 
    }
});

clearButton.addEventListener('click', function() {
    if (h1.textContent === "Yaoyao") {
        fetch(`http://localhost:3000/yao-reset`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {            
            yaoyaoNumber = data.numberYao;
            numberP.textContent = yaoyaoNumber;
        });  
    } else {
        fetch(`http://localhost:3000/jiang-reset`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {            
            jiangjiangNumber = data.numberJiang;
            numberP.textContent = jiangjiangNumber;
        }); 
    }
});

changeNameButton.addEventListener('click', function() {
    if (h1.textContent === "Yaoyao") {
        h1.textContent = "Jiangjiang";
        document.getElementById('number').textContent = jiangjiangNumber;
    } else {
        h1.textContent = "Yaoyao";
        document.getElementById('number').textContent = yaoyaoNumber;
    }
});

changeColorButton.addEventListener('click', function() {
    if (h1.style.color === "black") {
        h1.style.color = "red";
    } else {
        h1.style.color = "black";
    }
});


