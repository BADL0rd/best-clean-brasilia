const wppLink = document.querySelector("#wpp_link")
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        wppLink.classList.add('active')
    }else if(window.pageYOffset == window.screen.height){
        wppLink.classList.remove('active')
    }
    else{
        wppLink.classList.remove('active')
    }

})