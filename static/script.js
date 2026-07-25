var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    let sum = x1 + x2;
    var x3 = sum;
    console.log(x3);
    return x3
}

var m = SumNPrint(x, y);
var n = SumNPrint(A, B);

if (n.length > m){
    console.log(n);
}
else if (n.length < m){
    console.log(m);
}
else {
    console.log("Good Job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// L1.forEach(findTheBanana, L1);
// L2.forEach(findTheBanana, L2);

function findTheBanana(item, index, arr){
    if (item == "Banana"){
        if (arr == L1){
            window.alert("We found a banana in the first array");
        }
        else if (arr == L2){
            window.alert("We found a banana in second array");
        }
    }
}

function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greetingID");

    if (h < 12) {
        E.innerHTML = "Good morning, I am Khushi!";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, I am Khushi!";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, I am Khushi!";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        E.innerHTML = "Good night, I am Khushi!";
    }
}

var currentPage = window.location.href;

if (currentPage.includes('/index.html')) {
    greetingFunc();
}

function addYear() {
    var date = new Date();
    var year = date.getFullYear();
    var E = document.getElementById("copyYear");
        E.innerHTML += year
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("seeMoreID").style.display = "none";

// }

$("#longIntro").hide();
$("#readLessID").hide();


$("#readMoreID").click(function() {
    $("#longIntro").show();
    $("#readMoreID").hide();
    $("#readLessID").show();
});

$("#readLessID").click(function() {
    $("#longIntro").hide();
    $("#readMoreID").show();
    $("#readLessID").hide();
});



var form = document.getElementById("formID");

if (form){
    var errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function(event) {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var comment = document.getElementById("comment");

        if (!name.value() || !email.value() || !comment.value()) {
            event.preventDefault();
            errorMessage.innerHTML = "Please fill out all required fields!";

        }
    });

}


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var full = data;          
            var adviceContainer = full.slip;  
            var message = adviceContainer.advice;

            document.getElementById("adviceText").innerText = message;

        })
        .catch(function(error) {
            document.getElementById("adviceText").innerText = 'Error, try again!';
        });
}


function toggleMenu() {
    var links = document.querySelector('.nav-links');
    links.classList.toggle('active');
}
  
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);


function highlightActiveLink() {
    var currentPage = window.location.pathname.split('/').pop();
    if(currentPage == '') {
        currentPage = 'index.html';
    }
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if(href.endsWith(currentPage)) {
        link.classList.add('active');
        }
    });
}