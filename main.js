setTimeout(() => {
    
    document.getElementById('loading').style.maxHeight = "0"

}, 3500);

let closenav = document.querySelector('.closebtn')
let ham = document.getElementById('hamburger')
let nav = document.getElementById('nav')
let open = false
ham.addEventListener('click' , ()=>{
    nav.style.maxWidth = "100%"
        setTimeout(() => {
            open =  true
        }, 100);;

})
document.addEventListener('click', ()=>{
    if (open) {
        nav.style.maxWidth= '0'
        open = false
    }
})

closenav.addEventListener('click', ()=>{
    nav.style.maxWidth = "0"
    open = false;
})