// const nav = document.querySelector("nav")

// window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 130) {
//         nav.classList.add("bg-semi-transparent", "shadow")
//     } else {
//         nav.classList.remove("bg-semi-transparent", "shadow")
//     }
// })

const to_top_btn = document.getElementById('to_top')

window.onscroll = () => {
    scroll()
}

const scroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        to_top_btn.style.display = 'block'
    } else {
        to_top_btn.style.display = 'none'
    }
}

const toTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}