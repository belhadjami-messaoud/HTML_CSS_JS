
//sliders variable
let slide = document.querySelector(".clients .slider");
let boxs = document.querySelector(".clients .slider .box");
let slideNavigate = document.querySelectorAll(".clients .navigation span");

//questions variable
let questions = document.querySelectorAll(".question")
let answer = document.querySelectorAll(".answer")

//header variable

let header = document.querySelector("header .nav")
let mobile = document.querySelector("header .mobile")
let sticky = document.querySelector("header")


// section about header
mobile.addEventListener("click", function () {
    header.classList.toggle("active")
})

window.addEventListener("scroll", function () {
    // if (window.scrollY > 0) {
    //     sticky.classList.add("active")
    // }
    sticky.classList.toggle("active", this.scrollY > 0)
})

//section about slider
let counter = 1;
let size = boxs.clientWidth;



slideNavigate.forEach((item, key) => {

    item.addEventListener("click", function () {
        slide.style.transform = "translateX(" + (-size * key + 1) + "px)";
        slideNavigate.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})


// section about questions

questions.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active")
        // answer[0].style.height = answer[0].clientHeight + "px"
        console.log(answer[0].clientHeight)

    })
})