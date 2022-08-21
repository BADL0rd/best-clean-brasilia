const wppLink = document.querySelector("#wpp_link")
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        wppLink.classList.add('active')
    }else{
        wppLink.classList.remove('active')
    }

})