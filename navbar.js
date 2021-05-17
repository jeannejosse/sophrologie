window.addEventListener('scroll',function(e){
  if (window.innerWidth > 1024) {
    if(window.scrollY < 88) {
      document.querySelector(".dropdown-content").style.backgroundColor ="transparent";
      document.querySelector(".dropdown-content").style.color ="white";

    } else {
      document.querySelector(".dropdown-content").style.backgroundColor ="white";
      document.querySelector(".dropdown-content").style.color ="black";
    }

    if(window.scrollY < 176) {
      // document.querySelector(".site-description").style.position = "relative";
      // document.querySelector(".site-description").style.top = "30px";
      // document.querySelector("nav").style.position = "relative";
      // document.querySelector("nav").style.top = "30px";
      document.querySelector("header").style.marginTop = "30px";

      document.querySelector("header").style.background = "transparent";

      document.querySelector("nav .active").style.color = "#9CC5C7";
      document.querySelector("nav .active").style.borderBottom ="solid 2px #9CC5C7";


      for (let i in document.querySelectorAll("nav a.underline")){
        document.querySelectorAll("nav a.underline")[i].addEventListener("mouseover",function (){
          document.querySelectorAll("nav a.underline")[i].style.color ="#9CC5C7";
          document.querySelectorAll("nav a.underline")[i].style.borderBottom ="solid 2px #9CC5C7";
        });

        document.querySelectorAll("nav a.underline")[i].addEventListener("mouseout",function (){
          document.querySelectorAll("nav a.underline")[i].style.color ="#fff";
          //document.querySelectorAll(".nav a.underline")[i].style.borderBottom ="solid 2px #9CC5C7";
        });
      }

    } else {
      // Note: we could implement a loop to iterate over querySelectorAll matches (Nodelist)
      // document.querySelector(".site-description").style.position = "relative";
      // document.querySelector(".site-description").style.top = "0px";
      // document.querySelector("nav").style.position = "relative";
      // document.querySelector("nav").style.top = "0px";
      document.querySelector("header").style.marginTop = "0px";

      document.querySelector("header").style.background = "rgba(166, 203, 204,0.90)";

      document.querySelector("nav .active").style.color = "#000";
      document.querySelector("nav .active").style.borderBottom ="solid 2px #000";



      for (let i in document.querySelectorAll("nav a.underline")){
        document.querySelectorAll("nav a.underline")[i].addEventListener("mouseover",function (){
          document.querySelectorAll("nav a.underline")[i].style.color ="#000";
          document.querySelectorAll("nav a.underline")[i].style.borderBottom ="solid 2px #000";
        });

        document.querySelectorAll("nav a.underline")[i].addEventListener("mouseout",function (){
          document.querySelectorAll("nav a.underline")[i].style.color ="#fff";
          document.querySelectorAll("nav a.underline")[i].style.borderBottom ="none";
        });
      }
    }
  } else {
      document.querySelector("header").style.background = "#9CC5C7";
      document.querySelector("header").style.marginTop = "0px";

    //   document.querySelector(".sub-menu-trigger").addEventListener("click", function() {
    //   document.querySelectorAll(".sub-menu").forEach(subMenu => {
    //     if (subMenu.style.display === "none") {
    //       subMenu.style.display = "block";
    //       document.querySelector(".menu-arrow").innerHTML = "▲"
    //     } else {
    //       subMenu.style.display = "none";
    //       document.querySelector(".menu-arrow").innerHTML = "▼"
    //     }
    //   });
    // });
  }
});


const menuBtnSmallScreen = document.querySelector('.menu-btn-small-screen');
let menuOpenSmallScreen = false;
menuBtnSmallScreen.addEventListener('click', () => {
  if(!menuOpenSmallScreen) {
    menuBtnSmallScreen.classList.add('open');
    menuOpenSmallScreen = true;
    document.querySelector(".dropdown-content-small-screen").style.height = "200px";
    console.log('ok')
  } else {
    menuBtnSmallScreen.classList.remove('open');
    menuOpenSmallScreen = false;
    document.querySelector(".dropdown-content-small-screen").style.height = "0";
  }
});

document.body.addEventListener('click', (e) => {
  if(['menu-btn', 'menu-btn__burger'].some(i => Array.from(e.target.classList).includes(i))) {
    return;
  } else if(menuOpenSmallScreen) {
    menuBtnSmallScreen.classList.remove('open');
    menuOpenSmallScreen = false;
    document.querySelector(".dropdown-content-small-screen").style.height = "0";
  }
});


const menuBtnSmartphone = document.querySelector('.menu-btn-smartphone');
let menuOpenSmartphone = false;
menuBtnSmartphone.addEventListener('click', () => {
  if(!menuOpenSmartphone) {
    menuBtnSmartphone.classList.add('open');
    menuOpenSmartphone = true;
    document.querySelector(".dropdown-content-smartphone").style.height = "120px";
  } else {
    menuBtnSmartphone.classList.remove('open');
    menuOpenSmartphone = false;
    document.querySelector(".dropdown-content-smartphone").style.height = "0";
  }
});

document.body.addEventListener('click', (e) => {
  if(['menu-btn', 'menu-btn__burger'].some(i => Array.from(e.target.classList).includes(i))) {
    return;
  } else if(menuOpenSmartphone) {
    menuBtnSmartphone.classList.remove('open');
    menuOpenSmartphone = false;
    document.querySelector(".dropdown-content-smartphone").style.height = "0";
  }
});
