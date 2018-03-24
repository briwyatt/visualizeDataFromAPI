var x = 0;
var spaceData;

function preload(){
    createCanvas(200,200);
}


function setup(){
    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
// use jsonp json padding- when cross origin 
}

function gotData(data){
    // data.people.forEach(person => {
    //     console.log(person.name);
    // });
    // retrieve the data and set to global variables
    spaceData = data;
}


function draw(){
    // draw a white circle representing each person in space right now 
    background(0);
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
            fill(255);
            ellipse(random(height), random(width), 16, 16);
        }
    }
}
