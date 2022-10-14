let moon = document.querySelector('#moon')
let road = document.querySelector('#road')
let right_mount = document.querySelector('#right_mount')
let left_mount = document.querySelector('#left_mount')
// let text = document.querySelector('#text')
let stars = document.querySelector('#stars')
let sec = document.querySelector('.sec')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px'
    // text.style.right = 100 + value + 'px'
    moon.style.top = value * 0.45 + 'px'
    right_mount.style.left = value * 0.25 + 'px'
    left_mount.style.left = -value * 0.25 + 'px'
})