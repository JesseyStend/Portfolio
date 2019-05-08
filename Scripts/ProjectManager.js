let jsonFile = 'Scripts/JsonFiles/Projects.json';
var JsonLoaded = new Event('JsonLoaded');
var projects = [];
let exitButton = document.getElementById('ExitButton');

exitButton.onclick = ()=>{
  document.getElementById('Projecten').setAttribute('class', "ContentWindow");
  document.getElementById('ProjectInfoTab').style.display = "none";
}

get(jsonFile).then((json)=>{
  let jsonAsObject = JSON.parse(json);
  projectsTab = jsonAsObject.Projects;

  Object.keys(projectsTab).forEach((project)=>{
    projectsTab[project].name = project;
    projects.push(projectsTab[project]);
  });
  updateList();
});

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
       // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

Object.size = function(obj) {
  let size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
}
