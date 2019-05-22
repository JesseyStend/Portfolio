var portfolioContainer = document.getElementById("ProjectContainer");

function CreateTab(imgSource, id) {
  var tab = document.createElement("div");
  var inside = document.createElement("div");
  var img = document.createElement("img");

  tab.setAttribute('class', "col-md-4 col-sm-6 padding-right-zero");
  inside.setAttribute('class', "portfolio-box design");
  img.setAttribute('class', "img-responsive");
  img.setAttribute('src', imgSource);
  inside.appendChild(img);
  tab.appendChild(inside);

  tab.onclick = () =>{
    console.log("Hey");
  }

  portfolioContainer.appendChild(tab);
}

for (var i = 1; i <= 6; i++) {
  CreateTab("img/port0"+i+".jpg", i);
}
