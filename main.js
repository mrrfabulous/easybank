let hambuger = document.querySelector(".hambuger")
let closeBtn = document.querySelector(".close")
let nav = document.querySelector(".nav-list")

let toggleActive = () => {
    nav.classList.toggle("active")
    // alert("I have been clicked")
}


hambuger.addEventListener("click", toggleActive )

