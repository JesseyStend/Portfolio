let navItems = document.getElementsByClassName('NavItem');
let navBar = document.getElementById('NavBar');
let underBody = document.getElementById('UnderBody');
let contentWindows = document.getElementsByClassName('ContentWindow');
let homeButton = document.getElementById('HomeButton');

let clicked = false;


for (var i = 0; i < navItems.length; i++) {
  let navItem = navItems[i];
  navItem.value = i;
  navItem.onclick = ()=>{
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].setAttribute('id',"NotSelectedNav");
      contentWindows[i].style.display = "none";
    }
    if (!clicked) {
      navBar.style.bottom = "auto";
      navBar.style.top = "0";
      navBar.setAttribute('class',"bottomtotop2");
      navBar.style.position = "absolute";
      underBody.setAttribute('class',"UnderBody bottomtotop");
      underBody.style.minHeight = "100%";
      clicked = true;
      autoplayDisabled = true;
      homeButton.style.display = "block";
    }
    if (navItem.value == 0) {
      underBody.style.height = "auto";
      underBody.style.minHeight = "100%"
    } else { underBody.style.minHeight = "100%" }
    navItem.setAttribute('id',"SelectedNav");
    contentWindows[navItem.value].style.display = "block";
  }
}

homeButton.onclick = ()=>{
  navBar.style.bottom = "0";
  navBar.style.top = "auto";
  navBar.setAttribute('class',"");
  navBar.style.position = "fixed";
  underBody.setAttribute('class',"UnderBody");
  underBody.style.Height = "0";
  underBody.style.minHeight = "0";
  clicked = false;
  autoplayDisabled = false;
  for (var i = 0; i < navItems.length; i++) {
    contentWindows[i].style.display = "none";
  }
  homeButton.style.display = "none";
  document.getElementById('Projecten').setAttribute('class', "ContentWindow");
  document.getElementById('ProjectInfoTab').style.display = "none";
};
