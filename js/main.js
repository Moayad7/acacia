

// navbar-toggler
var menuButton = document.getElementById("navbar-btn")
var menuButtonClose = document.getElementById("navbar-btn-close")
var menuButtonIcon = document.getElementById("navbar-btn-icon")
var navbarMenu = document.getElementById("navbar-list")
var toggle = false;
menuButton.addEventListener("click",function() {
    if(toggle==false){
        menuButtonIcon.innerHTML='close'
        navbarMenu.className='uppercase flex flex-col pt-20 lg:pt-0 lg:px-0 px-12 lg:flex-row lg:items-center lg:pb-0 pb-18 absolute lg:static bg-teal-50 lg:bg-transparent lg:z-auto z-[-1] w-80 h-screen lg:w-auto lg:h-auto  transition-all duration-500 ease-in top-0 z-[999] left-0'
    }else{
        menuButtonIcon.innerHTML='menu'
        navbarMenu.className='uppercase flex flex-col pt-20 lg:pt-0 lg:px-0 px-12 lg:flex-row lg:items-center lg:pb-0 pb-18 absolute lg:static bg-teal-50 lg:bg-transparent lg:z-auto z-[-1] w-80 h-screen lg:w-auto lg:h-auto  transition-all duration-500 ease-in top-0 z-[999] left-[-1920px]'
    }
    toggle=!toggle;
});
menuButtonClose.addEventListener("click",function() {
    if(toggle==false){
        menuButtonIcon.innerHTML='close'
        navbarMenu.className='uppercase flex flex-col pt-20 lg:pt-0 lg:px-0 px-12 lg:flex-row lg:items-center lg:pb-0 pb-18 absolute lg:static bg-teal-50 lg:bg-transparent lg:z-auto z-[-1] w-80 h-screen lg:w-auto lg:h-auto  transition-all duration-500 ease-in top-0 z-[999] left-0'
    }else{
        menuButtonIcon.innerHTML='menu'
        navbarMenu.className='uppercase flex flex-col pt-20 lg:pt-0 lg:px-0 px-12 lg:flex-row lg:items-center lg:pb-0 pb-18 absolute lg:static bg-teal-50 lg:bg-transparent lg:z-auto z-[-1] w-80 h-screen lg:w-auto lg:h-auto  transition-all duration-500 ease-in top-0 z-[999] left-[-1920px]'
    }
    toggle=!toggle;
});

