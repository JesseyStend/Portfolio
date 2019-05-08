let slideShowOfProjects = document.getElementById('TumbnailHolder');

let listOfElements = [];
let currentElement = 0;
let testArray = ["Images/Backgrounds/HomePage/background1.jpg","Images/Backgrounds/HomePage/background2.jpg"];

UpdateSLideShow(testArray);

function UpdateSLideShow(array) {
  slideShowOfProjects.innerHTML = "";
  listOfElements = [];
  for (var i = 0; i < array.length; i++) {
    console.log(slideShowOfProjects);
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.setAttribute('src',array[i]);
    li.setAttribute('class',"ProjectTumbnail fade");
    li.appendChild(img);
    li.style.display = "none";
    slideShowOfProjects.appendChild(li);
    listOfElements.push(li);
    //console.log(array[i].isGif);
  }
  currentElement = 0;
  listOfElements[0].style.display = "block";
}

function NextProjectSlide() {
  listOfElements[currentElement].style.display = "none";
  if (currentElement < listOfElements.length - 1) {
    currentElement++;
  } else {
    currentElement = 0;
  }
  listOfElements[currentElement].style.display = "block";
  // listOfElements[currentElement].setAttribute('class',"ProjectTumbnail fade");
}

function PrevousProjectSlide() {
  listOfElements[currentElement].style.display = "none";
  if (currentElement > 0) {
    currentElement--;
  } else {
    currentElement = listOfElements.length - 1;
  }
  listOfElements[currentElement].style.display = "block";
  // listOfElements[currentElement].setAttribute('class',"ProjectTumbnail fade");
}
