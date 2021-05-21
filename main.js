const toggleClasses = function (selector, oldClass, newClass) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
  })
};

window.addEventListener('scroll',function(e){
  if (window.innerWidth > 1024) {
    if(window.scrollY < 72) {
      document.querySelector(".dropdown-content-large-screen").style.backgroundColor ="transparent";
      document.querySelector(".dropdown-content-large-screen").style.boxShadow ="none";
      document.querySelector(".dropdown-content-large-screen").style.color ="white";

    } else {
      // console.log(document.querySelector(".dropdown-content"));
      document.querySelector(".dropdown-content-large-screen").style.backgroundColor ="white";
      document.querySelector(".dropdown-content-large-screen").style.boxShadow ="0px 8px 16px 0px rgba(0,0,0,0.2)";
      document.querySelector(".dropdown-content-large-screen").style.color ="black";
    }
    if(window.scrollY < 176) {
      toggleClasses("header", "scrolled", "not-scrolled");

      toggleClasses("nav .active-scrolled", "active-scrolled", "active");

      toggleClasses("a.underline-scrolled", "underline-scrolled", "underline");

    } else {
      toggleClasses("header", "not-scrolled", "scrolled");

      toggleClasses("nav .active", "active", "active-scrolled");

      toggleClasses("a.underline", "underline", "underline-scrolled");
    }
  } else {
      toggleClasses("header", "not-scrolled", "scrolled");
  }
});


const menuBtnSmallScreen = document.querySelector('.menu-btn-small-screen');
let menuOpenSmallScreen = false;
menuBtnSmallScreen.addEventListener('click', () => {
  if(!menuOpenSmallScreen) {
    menuBtnSmallScreen.classList.add('open');
    menuOpenSmallScreen = true;
    document.querySelector(".dropdown-content-small-screen").style.height = "200px";
    // console.log('ok')
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
    document.querySelector(".dropdown-content-smartphone").style.height = "144px";

    // menuBtnSmartphone.querySelector(".menu-btn__burger::before").style.transform = "translateY(0px)";

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

// Appear animation

// Remove the class "appear" from elements that are already visible when the page loads
document.querySelectorAll(".appear").forEach((element) => {
  const elementTopFromWindowBottom = window.innerHeight - element.getBoundingClientRect().top;
  if (elementTopFromWindowBottom > 0) {
    element.classList.remove("appear");
  }
});

var scrollBefore = 0;
document.addEventListener('scroll', (e) => {
  const scrolled = window.scrollY;
  if (scrolled > scrollBefore) {

    scrollBefore = scrolled;
    document.querySelectorAll(".appear").forEach((element) => {
      // console.log(element);
      const elementBottomFromWindowBottom = element.getBoundingClientRect().bottom - window.innerHeight;
      const elementTopFromWindowBottom = window.innerHeight - element.getBoundingClientRect().top;

      // console.log(elementBottomFromWindowBottom);
      if (elementTopFromWindowBottom < 160 && window.innerHeight > 500 && !element.classList.contains('bounce')) {
        element.style.visibility = "hidden";
        // element.classList.remove("bounce");
      } else {
        element.style.visibility = "visible";
        element.classList.add("bounce");
      }
    });
  }
});

const cards = document.querySelectorAll(".flip-card");
cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    // card.querySelector(".flip-card-inner").style.transform="rotateY(180deg)";
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped");
    } else {
      cards.forEach(card => card.classList.remove("flipped"));
      card.classList.add("flipped");
    }
  });
});
