let slideShow = document.getElementById('HomepageSlider');
let backgroundSelecter = document.getElementById('BackgroundSelecter');
let backgrounds = ["Images/Backgrounds/HomePage/background1.jpg","Projects/Cuphead/Images/Cuphead1.png","Projects/Kahootish/Images/Kahootish.png","Projects/ShadersIntro/Images/Shaders3.png"];
let selectors = [];
let slideItems = [];
let prevousSelector;
let prevousSlideItem;
let index = 0;
var autoplayDisabled = false;
var autoplayTimeout = false;

for (var i = 0; i < backgrounds.length; i++) {
  let li = document.createElement('li');
  let div = document.createElement('div');
  li.value = i;
  selectors[i] = li;
  div.style.backgroundImage = "url(" + backgrounds[i] + ")";
  div.setAttribute('class',"HomepageSlider-item fade");
  li.onclick = ()=>{
    if (prevousSelector != null) {
      prevousSelector.setAttribute('class',"");
    }
    selectors[li.value].setAttribute('class',"SelectedSelector");
    if (prevousSlideItem != null) {
      prevousSlideItem.style.display = "none";
    }
    slideItems[li.value].style.display = "block";
    prevousSlideItem = slideItems[li.value];
    prevousSelector = selectors[li.value];
  }
  slideItems[i] = div;
  div.style.display = "none";
  slideShow.appendChild(div);
  backgroundSelecter.appendChild(li);
}

prevousSelector = selectors[index];
prevousSlideItem = slideItems[index];
prevousSelector.setAttribute('class',"SelectedSelector");
prevousSlideItem.style.display = "block";
setInterval(()=>{Autoplay();}, 6500);

function NextSlide() {
  if (prevousSelector != null) {
    prevousSelector.setAttribute('class',"");
  }
  if (prevousSlideItem != null) {
    prevousSlideItem.style.display = "none";
  }
  if (index < backgrounds.length - 1) {
    index++;
  } else { index = 0 }
  selectors[index].setAttribute('class',"SelectedSelector");
  slideItems[index].style.display = "block";
  prevousSlideItem = slideItems[index];
  prevousSelector = selectors[index];
}

function PrevousSlide() {
  if (prevousSelector != null) {
    prevousSelector.setAttribute('class',"");
  }
  if (prevousSlideItem != null) {
    prevousSlideItem.style.display = "none";
  }
  if (index > 0) {
    index--;
  } else { index = backgrounds.length -1 }
  selectors[index].setAttribute('class',"SelectedSelector");

  slideItems[index].style.display = "block";
  prevousSlideItem = slideItems[index];
  prevousSelector = selectors[index];
}

function Autoplay() {
  if (!autoplayDisabled) {
    if (!autoplayTimeout) {
      NextSlide();
    }
    autoplayTimeout = false;
  }
}
