var objects;
var currentSlideNumber = 0;

function InitSlideShow(name, video, images) {
  objects = CreateElement("div", ['class'], ["ShowCase"]);
  objects.appendChild(CreateSlide(name, video, 1, images.length + 1, 'block'));

  for (var i = 2; i < images.length + 1; i++) {
    objects.appendChild(CreateSlide(name, images[i - 2], i, images.length, 'none'));
  }

  var leftButton = CreateElement('button', ['class', 'id', 'type', 'name'], ["slideButton", "leftButton", "button", "button"]);
  leftButton.innerHTML = "&#10094;";
  leftButton.onclick = ()=>{
    PreveousSlide();
  }
  objects.appendChild(leftButton);

  var rightButton = CreateElement('button', ['class', 'id', 'type', 'name'], ["slideButton", "rightButton", "button", "button"]);
  rightButton.innerHTML = "&#10095;";
  rightButton.onclick = ()=>{
    NextSlide();
  }
  objects.appendChild(rightButton);

  return objects;
}

function CreateSlide(name, source, id, limmit, display) {
  var object = CreateElement("div", ['class'], ["ProjectImage fadeInUp"]);
  var nummer = CreateElement("div", ['id'], ["numbertext"]);
  nummer.innerHTML = id + " / " + limmit;
  object.appendChild(nummer);
  if (id <= 1) {
    var video = CreateElement("iframe", ['width', 'height', 'src', 'frameborder', 'allow', 'allowfullscreen'], ["720", "400", source, "0", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "true"]);
    object.appendChild(video);
  } else {
    var image = CreateElement("img", ['src', 'class'], ["img/" + name + "/" + source, "img-responsive"]);
    object.appendChild(image);
  }
  object.style.display = display;
  return object;
}

function NextSlide() {
  objects.childNodes[currentSlideNumber].style.display = "none";
  currentSlideNumber++;
  if (objects.childElementCount - 3 < currentSlideNumber) {
    currentSlideNumber = 0;
  }

  objects.childNodes[currentSlideNumber].style.display = "block";
}

function PreveousSlide() {
  console.log(objects);
  objects.childNodes[currentSlideNumber].style.display = "none";
  currentSlideNumber--;
  console.log(objects.childElementCount);
  if (0 > currentSlideNumber) {
    currentSlideNumber = objects.childElementCount - 3;
  }

  objects.childNodes[currentSlideNumber].style.display = "block";
}
