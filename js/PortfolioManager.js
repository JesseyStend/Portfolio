var portfolioContainer = document.getElementById("ProjectContainer");
var portfolioInfoContainer = document.getElementById("ProjectInfo");
var currentPortfolioItem;

function CreateTab(imgSource, id) {
  var tab = CreateElement("a", ['class', 'href'], ["col-md-4 col-sm-6", "#ProjectInfo"]);
  var inside = document.createElement("div");
  var img = document.createElement("img");

  inside.setAttribute('class', "portfolio-box design");
  img.setAttribute('class', "img-responsive");
  img.setAttribute('src', imgSource);
  inside.appendChild(img);
  tab.appendChild(inside);



  tab.onclick = () =>{
    HidePortfolioItem();
    ShowPortfolioItem(databaseContent[id]);
  }

  portfolioContainer.appendChild(tab);
}

function ShowPortfolioItem(object) {
  var showCase = InitSlideShow(object["Naam"], object["Videos"], object["Images"]);

  var info = CreateElement("div", ['class'], ["ProjectInformation"]);

  var name = CreateText("h2", object["Naam"]);
  var subtitle = CreateText("p", object["Subtitle"]);
  var beschrijvingTitel = CreateText("h4", "Beschrijving");
  var beschrijving = CreateText("h5", object["ProjectBeschrijving"]);
  var geleerdTitel = CreateText("h4", "Wat heb ik geleerd?");
  var geleerd = CreateText("h5", object["WatHebIkGeleerd"]);
  var otherTitel = CreateText("h4", "Overig");
  var other = CreateText("h5", object["Tools"] + ", " + object["Overig"]);

  info.appendChild(name);
  info.appendChild(subtitle);
  info.appendChild(beschrijvingTitel);
  info.appendChild(beschrijving);
  info.appendChild(geleerdTitel);
  info.appendChild(geleerd);
  info.appendChild(otherTitel);
  info.appendChild(other);

  var projectLinks = document.createElement("div");
  projectLinks.setAttribute('class', "ProjectLinks");

  var projectLink = CreateElement("a", ['href'], [object["Project"]]);
  var gitLink = CreateElement("a", ['href'], [object["Github"]]);
  var projectIcon = CreateElement("img", ['src', 'id'], ["img/Icons/ProjectIcon.png", "ProjectIcons"]);
  var gitIcon = CreateElement("img", ['src', 'id'], ["img/Icons/GithubIcon.png", "ProjectIcons"]);
  projectLink.appendChild(projectIcon);
  gitLink.appendChild(gitIcon);
  projectLinks.appendChild(projectLink);
  projectLinks.appendChild(gitLink);

  portfolioInfoContainer.appendChild(showCase);
  portfolioInfoContainer.appendChild(info);
  portfolioInfoContainer.appendChild(projectLinks);
  currentPortfolioItem = portfolioInfoContainer;

  for (var i = 0; i < object.length; i++) {
    console.log(object[i] + ", ");
  }
}

function HidePortfolioItem() {
  portfolioInfoContainer.innerHTML = "";
  currentPortfolioItem = null;
}

function CreateElement(element, attributes, attributeValues) {
  var object = document.createElement(element);
  for (var i = 0; i < attributes.length; i++) {
    object.setAttribute(attributes[i], attributeValues[i]);
  }
  return object;
}

function CreateText(element, text) {
  var object = document.createElement(element);
  object.innerHTML = text;
  return object;
}

for (var i = 0; i < parseInt(rows); i++) {
  CreateTab("img/" + databaseContent[i]["Naam"] + "/" + databaseContent[i]["Images"][0], i);
}
