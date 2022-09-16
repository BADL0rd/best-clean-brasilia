const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

const showCont = (id, toggle_id) =>{
  const element = document.getElementById(id),
  toggle = document.getElementById(toggle_id)
  if(window.innerWidth <= 900){
    element.classList.toggle('show')
    toggle.classList.toggle('bx-x')
  }
}
