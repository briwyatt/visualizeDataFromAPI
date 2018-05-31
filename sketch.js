"use strict";
 
let x = 0;
let spaceData;
let jsonObject;
let people = [];
let myCanvas;

const HTTP = 'http' + '://',
      SITE = 'api.Open-Notify.org/',
      FILE = 'astros.json',
      REMOTE = true,
      // PATH = REMOTE && HTTP + SITE + FILE || FILE,
      PATH = REMOTE + SITE + FILE || FILE,
      COLOR = 'OrangeRed';
 
 
function preload() {
  jsonObject = loadJSON(PATH, print);
  // createCanvas(200,200);



}
 
function setup() {
   myCanvas = createCanvas(400, 400);

        var node = window.document.createElement('div');

      var bode = createP("<br/><br/><br/><br/><br/><br/><br/><br/>this project has my first example of using asynchronous data process to get "   
    + "data from api and visualize and animate that data. this data draws info from and api "
    + "showing us the number of people " 
    + "currently in space - and represents each person by a circle drawn. " 
    + "(as of 3/24/18, that number was 6 people));");

      window.document.getElementById('caption').appendChild(node);
    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
 
  // const astroArray = jsonObject.people,
        // len = astroArray.length,
        // issCrewNames = Array(len),
        // ol = createElement('ol');
 
  // ol.style('color', COLOR)
    // .style('font-weight: bold')
    // .style('font-size: 1.2em');  
 
  // for (let i = 0; i < len; issCrewNames[i] = astroArray[i++].name);
  // print(issCrewNames);
 
  // for (const crew of issCrewNames)  createElement('li', crew).parent(ol);
// }    
}

function gotData(data){
    data.people.forEach(person => {
        people.push(person);
        console.log(person.name);
    });
    // retrieve the data and set to global variables
    spaceData = data;
}

function draw(){
    // draw a white circle representing each person in space right now 
    background(200);
    stroke(255);
    line(x, 0, x, height);
    x = x+ 1;
    if(x > width){
        x = 0;
    }
    // use boolean test
    // all javascript ever wants to do is have things be true or false
    if(spaceData){
        randomSeed(5);
        for(var i = 0; i < spaceData.number; i++){
            fill(140);
            let h = random(height);
            let w = random(width);
            ellipse(h, w, 60, 60);
            let personName = createP(people[i].name);
            personName.position(h,w+ 25);
            personName.style("font-size", "12pt");
            personName.style("color", "#003366");
            myCanvas.position(h,w);
        }
    }

    

}

    


      

