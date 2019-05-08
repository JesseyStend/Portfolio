let filter = document.getElementById('filter');
let projectList = document.getElementById('Projects')
let tags  = [];
let nodes = [];
let filerdProjects = [];
let projectInfoTab = document.getElementById('ProjectInfoTab');

for (var i = 0; i < filter.childNodes.length; i++) {
  let node = filter.childNodes[i];
  node.active = false;
  filter.childNodes[i].onclick = ()=>{
    if (node.active) {
      node.setAttribute('class', "");
      for (var i = 0; i < tags.length; i++) {
        if (tags[i] == node.innerHTML) {
          tags.splice(i, 1);
        }
      }
      node.active = false;
    } else {
      node.setAttribute('class', "ative");
      tags.push(node.innerHTML);
      node.active = true;
    }
    updateList();
  }
}

function updateList() {
  filerdProjects = [];
  projectList.innerHTML = "";
  for (var i = 0; i < projects.length; i++) {
    projects[i].value = Number(projects[i]["Importance"]);
    projects[i].hasTags = false;
    for (var j = 0; j < tags.length; j++) {
        Object.keys(projects[i]["Tags"]).forEach((tag)=>{
        if (tags[j] == tag) {
          projects[i].value += 2;
          projects[i].hasTags = true;
        }
      });
    }
    filerdProjects.push(projects[i]);
  }

  filerdProjects = sortArray(filerdProjects);
  for (var i = 0; i < filerdProjects.length; i++) {
    if (filerdProjects[i].hasTags || tags[0] == null) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let p = document.createElement("p");
      li.node = filerdProjects[i];
      p.innerHTML = filerdProjects[i]["SmallDiscription"];
      p.setAttribute('id',"Discription");
      img.setAttribute('src',filerdProjects[i]["Images"]["Image1"]);
      li.onmouseover = ()=>{
        if (li.node["Gifs"]["Gif1"] != null) {
          img.setAttribute('src',li.node["Gifs"]["Gif1"]);
        } else {
          img.setAttribute('src',li.node["Images"]["Image2"]);
        }
        img.setAttribute('class',"fade");
      }

      li.onmouseout = ()=>{
        img.setAttribute('src',li.node["Images"]["Image1"]);
        img.setAttribute('class',"");
      }

      li.onclick = ()=>{
        document.getElementById('Projecten').setAttribute('class', "ContentWindow ShowProject");
        document.getElementById('Name').innerHTML = "Name: " + li.node.name;
        document.getElementById('ProjectDiscription').innerHTML = li.node["Discription"];
        document.getElementById('WhatHaveILearned').innerHTML = li.node["WhatHaveILearned"];
        document.getElementById('language').innerHTML = li.node["Language"];
        document.getElementById('Platform').innerHTML = li.node["Platform"];
        document.getElementById('Time').innerHTML = li.node["Time"];
        document.getElementById('Collaborators').innerHTML = li.node["Collaborators"];
        document.getElementById('Gitlink').setAttribute('href', li.node["GitHub"]);
        document.getElementById('ProjectLink').setAttribute('href', li.node["Project"]);
        let imagesAndGifs = [];
        Object.keys(li.node["Images"]).forEach((images)=>{
          imagesAndGifs.push(li.node["Images"][images]);
        })

        Object.keys(li.node["Gifs"]).forEach((gifs)=>{
          imagesAndGifs.push(li.node["Gifs"][gifs]);
        })

        UpdateSLideShow(imagesAndGifs);
        projectInfoTab.style.display = "block"
      }

      li.setAttribute('class',"ProjectItem");
      li.appendChild(img);
      li.appendChild(p);
      projectList.appendChild(li);
    }
  }
}

function sortArray(array)
{
    var swapp;
    var length = array.length-1;
    var x = array;
    do {
        swapp = false;
        for (var i=0; i < length; i++)
        {
            if (x[i].value < x[i+1].value)
            {
               var tempItem = x[i];
               x[i] = x[i+1];
               x[i+1] = tempItem;
               swapp = true;
            }
        }
        length--;
    } while (swapp);
 return x;
}
