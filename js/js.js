//sliders variable
let slide = document.querySelector(".clients .slider");
let boxs = document.querySelector(".clients .slider .box");
let slideNavigate = document.querySelectorAll(".clients .navigation span");

//questions variable
let questions = document.querySelectorAll(".question")


//header variable

let header = document.querySelector("header .nav")
let mobile = document.querySelector("header .mobile")
let sticky = document.querySelector("header")
let hide = document.querySelector("header .mobile i")

// portfolio + team + contact variable 

let portfolio = document.querySelector(".portfolio")
let team = document.querySelector(".team")
let contact = document.querySelector(".contact")

// section about header
mobile.addEventListener("click", function () {
    header.classList.toggle("active")
})




window.addEventListener("scroll", function () {
    sticky.classList.toggle("active", this.scrollY > 0)
})

// console.log(header.firstElementChild.children)
document.addEventListener("click", function (e) {
    if (e.target !== hide && e.target !== header.firstElementChild) {
        header.classList.remove("active")
    }
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
    // let answer = item.querySelector(".answer")
    item.addEventListener("click", function () {
        item.classList.toggle("active")
        // answer.style.height = answer.clientHeight + "px"
        console.log(answer.clientHeight)
    })

})


//section about portfolio 

window.addEventListener("scroll", function () {
    if (this.scrollY > portfolio.offsetTop - 500) {
        portfolio.classList.add("active")
        team.classList.add("active")

    } else {
        portfolio.classList.remove("active")
        team.classList.remove("active")

    }

    if (this.scrollY > team.offsetTop - 500) {
        team.classList.add("active")

    } else {
        team.classList.remove("active")
    }

    if (this.scrollY > contact.offsetTop - 500) {
        contact.classList.add("active")

    } else {
        contact.classList.remove("active")
    }
})