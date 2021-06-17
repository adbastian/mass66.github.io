const to_top_btn = document.getElementById('to-top')

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